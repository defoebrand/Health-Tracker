class SessionsController < ApplicationController
  before_action :authorized, only: %i[index]
  # skip_before_action :verify_authenticity_token

  def index
    puts @current_user
    @return_user = cleanse_user(@current_user)
    render json: @return_user
  end

  def create
    if session_params[:user_type] == 'user'
      @current_user = User.find_by(email: session_params[:email])
      token = encode_token({ user_id: @current_user.id })
    else
      @current_user = Doctor.find_by(email: session_params[:email])
      token = encode_token({ doctor_id: @current_user.id })
    end
    if @current_user&.authenticate(session_params[:password])
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
