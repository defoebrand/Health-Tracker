class UserController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorized, only: [:index]
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

  # rubocop:disable Metrics/CyclomaticComplexity
  def update
    user = User.find(params[:id])
    user.update(pulse: user_params[:pulse]) if user_params[:pulse] != '{}'
    user.update(weight: user_params[:weight]) if user_params[:weight] != '{}'
    user.update(temperature: user_params[:temp]) if user_params[:temp] != '{}'
    user.update(blood_sugar: user_params[:blood_sugar]) if user_params[:blood_sugar] != '{}'
    user.update(systolic: user_params[:systolic]) if user_params[:systolic] != '{}'
    user.update(diastolic: user_params[:diastolic]) if user_params[:diastolic] != '{}'

    render json: { message: user }
  end
  # rubocop:enable Metrics/CyclomaticComplexity

  def settings
    user = User.find(user_params[:id])
    user.update(name: user_params[:name]) if user.name != user_params[:name]
    user.update(email: user_params[:email]) if user.email != user_params[:email]
    user.update(password: user_params[:password]) if user.password != user_params[:password]

    render json: { user: user }
  end

  def communities
    render json: Community.all
  end

  def community_users
    @community = Community.find_by(name: comm_params[:name])
    render json: @community.users
  end

  def user_communities
    @user = User.find(user_params[:id])
    render json: @user.communities
  end

  def add_community
    @user = User.find(user_params[:id])
    @community = Community.find_by(name: comm_params[:name])
    @user.communities << @community
    render json: @community.users
  end

  def remove_community
    @user = User.find(user_params[:id])
    @community = Community.find_by(name: comm_params[:name])
    @user.communities.delete(@community)
    render json: @community.users
  end

  def doctors
    render json: { doctors: Doctor.all }
  end

  def my_doctors
    user = User.find(user_params[:id])
    render json: user.doctors.uniq
  end

  def appointment
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

  private

  def set_user
    @user = User.find_by(email: user_params[:email])
  end

  def user_params
    params.require(:user).permit(
      :id, :name, :email, :password,
      :age, :height, :weight,
      :dob, :sex, :ethnicity,
      :temp, :pulse, :blood_sugar,
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
