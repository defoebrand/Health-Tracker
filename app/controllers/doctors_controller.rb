class DoctorsController < ApplicationController
  def index
    display_doctors(Doctor.all)
  end

  def create
    @doctor = Doctor.create(doctor_params)

    if @doctor.valid?
      token = encode_token({ doctor_id: @doctor.id })
      render json: { user: cleanse_user(@doctor), token: token }
    else
      render json: { error: 'Incorrect Input Supplied' }
    end
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :email, :password)
  end
end
