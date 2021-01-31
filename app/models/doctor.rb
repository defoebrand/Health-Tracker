class Doctor < ApplicationRecord
  has_secure_password
  has_many :appointments, foreign_key: :doctor_id
  has_many :patients, through: :appointments, source: :user
end
