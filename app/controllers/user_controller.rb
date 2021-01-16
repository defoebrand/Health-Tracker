class UserController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_request!, only: [:index]
  def index
    if @current_user
      render json: @current_user

      # users = User.all
      # render json: users
    else
      render json: { error: 'Invalid username/password' }, status: :unauthorized
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save && @user.authenticate(user_params[:password])
      auth_token = JsonWebToken.encode(user_id: @user.id)
      render json: { auth_token: auth_token }, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: user_params[:email].to_s.downcase)
    if user&.authenticate(user_params[:password])
      auth_token = JsonWebToken.encode(user_id: user.id)
      render json: { auth_token: auth_token, user: user }, status: :ok
    else
      render json: { error: 'Invalid username/password' }, status: :unauthorized
    end
  end

  def update
    user = User.find(params[:id])

    user.update(pulse: user_params[:pulse]) if user_params[:pulse]
    user.update(temperature: user_params[:temp]) if user_params[:temp]
    user.update(blood_sugar: user_params[:blood_sugar]) if user_params[:blood_sugar]
    user.update(systolic: user_params[:systolic]) if user_params[:systolic]
    user.update(diastolic: user_params[:diastolic]) if user_params[:diastolic]

    render json: { message: user }
  end

  private

  def set_user
    @user = User.find(params[:email])
  end

  def user_params
    params.require(:user).permit(
      :name, :email, :password,
      :age, :height, :weight,
      :temp, :pulse, :blood_sugar,
      :systolic, :diastolic
    )
  end
end
