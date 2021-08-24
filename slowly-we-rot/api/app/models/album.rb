class Album < ActiveRecord::Base
  has_many :user_albums
  has_many :users, through: :user_albums
end