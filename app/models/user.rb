class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :name, :height, :password, :weight, :age, :sex, :gender, :ethnicity, presence: true
  has_many :users_communities
  has_many :communities, through: :users_communities
  has_many :appointments, foreign_key: :user_id
  has_many :doctors, through: :appointments
end
