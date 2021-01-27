class UserController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorized, only: %i[settings user_doctors
                                      user_communities user_appointments
                                      add_appointment cancel_appointment]
  before_action :set_user_by_id, only: %i[join_community leave_community]
  before_action :set_community, only: %i[community_users join_community leave_community]

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
    ApplicationRecord.transaction do
      user_params.each do |param|
        @user.update!(param[0] => user_params[param[0]]) if @user[param[0]] != user_params[param[0]]
      end
      render json: { user: @user }
    end
  rescue ActiveRecord::RecordInvalid
    render json: { user: 'Invalid Input' }
  end

  def community_users
    display_community_users(@community.users)
  end

  def user_communities
    display_communities(@user.communities)
  end

  def join_community
    @user.communities << @community
    display_community_users(@community.users)
  end

  def leave_community
    @user.communities.delete(@community)
    display_community_users(@community.users)
  end

  def user_doctors
    render json: @user.doctors.uniq
  end

  def user_appointments
    render json: @user.appointments
  end

  def add_appointment
    @doc = Doctor.find_by(name: appt_params[:doc_name])

    #   ApplicationRecord.transaction do
    #     appt_params.each do |param|
    #       user.update!(param[0] => user_params[param[0]]) if user_params[param[0]] != '{}'
    #     end
    #     render json: @user.doctors.uniq
    #   end
    # rescue ActiveRecord::RecordInvalid
    #   render json: { user: 'Invalid Input' }

    @appt = Appointment.create(
      doctor: @doc,
      user: @user,
      date: appt_params[:date],
      time: appt_params[:time],
      notes: appt_params[:notes]
    )
    render json: @user.doctors.uniq
  end

  def cancel_appointment
    @appt = Appointment.find(appt_params[:id])
    @user.appointments.delete(@appt)
    render json: @user.appointments
  end

  private

  def set_user_by_email
    @user = User.find_by(email: user_params[:email])
  end

  def set_user_by_id
    @user = User.find(user_params[:id])
  end

  def set_community
    @community = Community.find_by(name: comm_params[:name])
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
    params.require(:appt).permit(:id, :user_id, :doc_name, :date, :time, :notes)
  end
end
