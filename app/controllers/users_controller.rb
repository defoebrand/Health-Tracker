class UsersController < ApplicationController
  before_action :authorized, only: %i[show update]

  def index
    display_users(User.all)
  end

  def show
    render json: {
      communities: @current_user.communities,
      doctors: @current_user.doctors.uniq,
      appointments: @current_user.appointments
    }
  end

  def create
    @user = User.create(user_params)

    if @user.valid?
      token = encode_token({ user_id: @user.id })
      render json: { user: cleanse_user(@user), token: token }
    else
      render json: { error: 'Incorrect Input Supplied' }
    end
  end

  def update
    if @current_user.update!(user_params)
      render json: { user: cleanse_user(@current_user) }
    else
      render json: { user: 'Invalid Input' }
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :id, :name, :email, :password,
      :age, :height, :weight, :gender,
      :dob, :sex, :ethnicity,
      :temperature, :pulse, :blood_sugar,
      :systolic, :diastolic
    )
  end
end
