class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor
  validates :date, :time, :notes, presence: true
end
