# UserAlbum.destroy_all
# User.destroy_all
# Album.destroy_all



users = ['Tim', 'Tonya', 'Trevor', 'Jake', 'Larry']

users.map do |t|
  User.create(name: t)
end 


Album.create(name: "Slowly We Rot", artist: 'Obituary', length: "35 minutes", rating: 5, img_url: 'https://mmhradio.co.uk/wp-content/uploads/2019/02/OBITUARY-SLOWLY-WE-ROT-1.jpg')
Album.create(name: "Buried Death", artist: 'Coffins', length: "53 minutes", rating: 4, img_url: 'https://f4.bcbits.com/img/a2645270153_10.jpg')
Album.create(name: "Trumpeting Ecstacy", artist: 'Full of Hell', length: "23 minutes", rating: 3, img_url: 'https://f4.bcbits.com/img/0009666121_10.jpg')
Album.create(name: "Sunbather", artist: 'Deafheaven', length: "59 minutes", rating: 4, img_url: "https://media.pitchfork.com/photos/5929a0fb13d197565213850b/1:1/w_600/7e252f9a.jpg" )
Album.create(name: "War Master", artist: 'Bolt Thrower', length: "46 minutes", rating: 5, img_url: "https://img.discogs.com/hlJBVk1BbDzCCAZbyWMIcZJ9TRU=/fit-in/600x615/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-823469-1523384332-3216.jpeg.jpg")
Album.create(name: "Sonoran Depravation", artist: 'Gatecreeper', length: "62 minutes", rating: 5, img_url: "https://f4.bcbits.com/img/a3808027860_10.jpg")