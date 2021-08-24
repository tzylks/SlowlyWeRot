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
image = ['https://e.snmc.io/i/600/s/05c5f739ca00cd53f6ca9a1cdb55000c/2704551']
Album.create(name: albums.sample, length: length.sample, rating: rating, img_url: image.sample)
end

