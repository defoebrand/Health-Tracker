class UserController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorized, only: [:index]
  # before_action :authenticate_request!, only: [:index]
  before_action :set_user, only: [:login]
  def index
    # render json: { message: 'hello' }
    if @user
      render json: @user

      # users = User.all
      # render json: users
    else
      render json: { error: 'Invalid username/password' }, status: :unauthorized
    end
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token: token }
    else
      render json: { error: 'Invalid username or password' }
    end
  end

  def login
    @user = User.find_by(email: user_params[:email])

    if @user&.authenticate(user_params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token: token }
    else
      render json: { error: 'Invalid username or password' }
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
    @user = User.find_by(email: user_params[:email])
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
