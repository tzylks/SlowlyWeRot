class User < ActiveRecord::Base
  has_many :user_ablums
  has_many :albums, through: :user_ablums

end