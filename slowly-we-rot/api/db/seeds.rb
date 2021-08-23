# Dog.destroy_all
# DogWalk.destroy_all
# Walk.destroy_all

users = ['Tim', 'Tonya', 'Trevor', 'Jake', 'Larry']

users.map do |t|
  User.create(name: t)
end 

10.times do
albums = ['Slowly We Rot', 'Through the Eye', 'Corpse Man', 'Yellow Belly']
rating = rand(1..5)
length = ['100 minutes', '94 minutes', '20 minutes']
Album.create(name: albums.sample, length: length.sample, rating: rating)
end

