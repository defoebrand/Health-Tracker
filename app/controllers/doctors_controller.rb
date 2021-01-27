class DoctorsController < ApplicationController
  def index
    display_doctors(Doctor.all)
  end
end
