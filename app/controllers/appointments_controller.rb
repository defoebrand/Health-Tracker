class AppointmentsController < ApplicationController
  before_action :authorized, only: %i[create destroy]

  def create
    @doc = Doctor.find_by(name: appt_params[:doc_name])
    @appt = Appointment.create(
      doctor: @doc,
      user: @current_user,
      date: appt_params[:date],
      time: appt_params[:time],
      notes: appt_params[:notes]
    )
    render json: @current_user.doctors.uniq
  end

  def destroy
    @appt = Appointment.find(params[:id])
    @current_user.appointments.delete(@appt)
    render json: @current_user.appointments
  end

  private

  def appt_params
    params.require(:appt).permit(:doc_name, :date, :time, :notes)
  end
end
