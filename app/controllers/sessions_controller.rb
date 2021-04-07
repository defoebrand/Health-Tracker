class SessionsController < ApplicationController
  before_action :authorized, only: %i[index]

  def index
    @return_user = cleanse_user(@current_user)
    render json: @return_user
  end

  def create
    @current_user = if session_params[:user_type] == 'user'
                      User.find_by(email: session_params[:email])
                    else
                      Doctor.find_by(email: session_params[:email])
                    end
    if @current_user&.authenticate(session_params[:password])
      token = encode_token({ user_id: @current_user.id })
      @return_user = cleanse_user(@current_user)
      render json: { user: @return_user, token: token }
    else
      render json: { error: 'Invalid Username or Password' }
    end
  end

  private

  def session_params
    params.require(:session).permit(:email, :password, :user_type)
  end
end
