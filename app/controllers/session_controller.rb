class SessionController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorized, only: %i[index]

  def index
    if @current_user
      render json: @current_user
    else
      render json: { error: 'Invalid username/password' }, status: :unauthorized
    end
  end

  def create
    puts 'create session'
    puts session_params
    @current_user = User.find_by(email: session_params[:email])
    puts @current_user
    if @current_user&.authenticate(session_params[:password])
      token = encode_token({ user_id: @current_user.id })
      puts token
      render json: { user: @current_user, token: token }
    else
      render json: { error: 'Invalid Username or Password' }
    end
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
