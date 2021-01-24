class UserController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorized, only: %i[index user_doctors user_communities user_appointments add_appointment]
  before_action :set_user, only: [:login]

  def index
    if @user
      render json: @user
    else
      render json: { error: 'Invalid username/password' }, status: :unauthorized
    end
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

  def login
    if @user&.authenticate(user_params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token: token }
    else
      render json: { error: 'Invalid Username or Password' }
    end
  end

  def update
    user = User.find(params[:id])

    ApplicationRecord.transaction do
      user_params.each do |param|
        user.update!(param[0] => user_params[param[0]]) if user_params[param[0]] != '{}'
      end
      render json: { user: user }
    end
  rescue ActiveRecord::RecordInvalid
    render json: { user: 'Invalid Input' }
  end

  def settings
    user = User.find(user_params[:id])

    ApplicationRecord.transaction do
      user_params.each do |param|
        user.update!(param[0] => user_params[param[0]]) if user[param[0]] != user_params[param[0]]
      end
      render json: { user: user }
    end
  rescue ActiveRecord::RecordInvalid
    render json: { user: 'Invalid Input' }
  end

  def community_users
    @community = Community.find_by(name: comm_params[:name])
    render json: @community.users
  end

  def user_communities
    @user = User.find(user_params[:id])
    render json: @user.communities
  end

  def join_community
    @user = User.find(user_params[:id])
    @community = Community.find_by(name: comm_params[:name])
    @user.communities << @community
    render json: @community.users
  end

  def leave_community
    @user = User.find(user_params[:id])
    @community = Community.find_by(name: comm_params[:name])
    @user.communities.delete(@community)
    render json: @community.users
  end

  def doctors
    render json: Doctor.all
  end

  def user_doctors
    user = User.find(user_params[:id])
    render json: user.doctors.uniq
  end

  def add_appointment
    @user = User.find(appt_params[:user_id])
    @doc = Doctor.find_by(name: appt_params[:doc_name])
    @appt = Appointment.create(
      doctor: @doc,
      user: @user,
      date: appt_params[:date],
      time: appt_params[:time],
      notes: appt_params[:notes]
    )
    render json: @user.doctors.uniq
  end

  def user_appointments
    @user = User.find(user_params[:id])
    render json: @user.appointments
  end

  private

  def set_user
    @user = User.find_by(email: user_params[:email])
  end

  def user_params
    params.require(:user).permit(
      :id, :name, :email, :password,
      :age, :height, :weight, :gender,
      :dob, :sex, :ethnicity,
      :temperature, :pulse, :blood_sugar,
      :systolic, :diastolic
    )
  end

  def comm_params
    params.require(:community).permit(:name)
  end

  def appt_params
    params.require(:appt).permit(:user_id, :doc_name, :date, :time, :notes)
  end
end
