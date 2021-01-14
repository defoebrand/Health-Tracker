class HomepageController < ApplicationController
  before_action :authenticate_request!, except: :create
  before_action :set_user, only: %i[show update destroy]

  def index
    users = User.all
    render json: users
  end

  def login
    user = User.find_by(email: user_params[:email].to_s.downcase)

    if user&.authenticate(user_params[:password])
      auth_token = JsonWebToken.encode(user_id: user.id)
      render json: { auth_token: auth_token }, status: :ok
    else
      render json: { error: 'Invalid username/password' }, status: :unauthorized
    end
  end
end
