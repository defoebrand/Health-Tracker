class UserController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    users = User.all
    render json: users
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

  private

  def set_user
    @user = User.find(params[:email])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
