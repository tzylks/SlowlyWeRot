class Album < ActiveRecord::Base
  has_many :users, through: :user_reviews
  has_many :user_ablums
  
end