class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  has_many :users_communities
  has_many :communities, through: :users_communities
end
