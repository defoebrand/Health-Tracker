class UsersController < ApplicationController
  include UserHelper

  before_action :authorized, only: %i[show update]

  def index
    @returned_users = []
    if params.each.count < 3
      display_users(User.all)
    else
      params.each do |param|
        next if %w[controller action scale range].include?(param[0])

        query_switch(param, params)
      end
      display_users(@returned_users.flatten.uniq)
    end
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
      render json: { user: User.find(@user.id), token: token }
    else
      render json: { error: 'Incorrect Input Supplied' }
    end
  end

  def update
    ApplicationRecord.transaction do
      if %w[name email password].include?(user_params)
        user_params.each do |param|
          @current_user.update!(param[0] => user_params[param[0]]) if @current_user[param[0]] != user_params[param[0]]
        end
      else
        user_params.each do |param|
          @current_user.update!(param[0] => user_params[param[0]]) if user_params[param[0]] != '{}'
        end
      end
      render json: { user: @current_user }
    end
  rescue ActiveRecord::RecordInvalid
    render json: { user: 'Invalid Input' }
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
