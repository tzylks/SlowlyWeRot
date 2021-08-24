class User < ActiveRecord::Base
  has_many :user_albums
  has_many :albums, through: :user_albums
end