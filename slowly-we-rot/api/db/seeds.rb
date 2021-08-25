UserAlbum.destroy_all
User.destroy_all
Album.destroy_all



users = ['Tim']

users.map do |t|
  User.create(name: t)
end 


Album.create(name: "Slowly We Rot", artist: 'Obituary', length: "35 minutes", rating: 5, img_url: 'https://mmhradio.co.uk/wp-content/uploads/2019/02/OBITUARY-SLOWLY-WE-ROT-1.jpg')
Album.create(name: "Buried Death", artist: 'Coffins', length: "53 minutes", rating: 4, img_url: 'https://f4.bcbits.com/img/a2645270153_10.jpg')
Album.create(name: "Trumpeting Ecstacy", artist: 'Full of Hell', length: "23 minutes", rating: 3, img_url: 'https://f4.bcbits.com/img/0009666121_10.jpg')
Album.create(name: "Sunbather", artist: 'Deafheaven', length: "59 minutes", rating: 4, img_url: "https://media.pitchfork.com/photos/5929a0fb13d197565213850b/1:1/w_600/7e252f9a.jpg" )
Album.create(name: "War Master", artist: 'Bolt Thrower', length: "46 minutes", rating: 5, img_url: "https://img.discogs.com/hlJBVk1BbDzCCAZbyWMIcZJ9TRU=/fit-in/600x615/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-823469-1523384332-3216.jpeg.jpg")
Album.create(name: "Times of Grace", artist: "Neurosis", length: "55 minutes", rating: 2, img_url: "https://pbs.twimg.com/media/DekNnHTXkAMlzHD.jpg")
Album.create(name: "Sonoran Depravation", artist: 'Gatecreeper', length: "62 minutes", rating: 5, img_url: "https://f4.bcbits.com/img/a3808027860_10.jpg")
Album.create(name: "An Overdose of Death", artist: "Toxic Holocaust", length: "32 minutes", rating: 4, img_url: "https://f4.bcbits.com/img/a1130613380_10.jpg")
Album.create(name: "Dopethrone", artist: "Electric Wizard", length: "70 minutes", rating: 5, img_url: "https://riseaboverecords.com/wp-content/uploads/2013/10/p-1551-Dopethrone.jpg")
Album.create(name: "No Comfort", artist: "Monolord", length: "66 minutes", rating: 4, img_url: "https://img.discogs.com/rvby7FRqW-heAHC68D0uq0nyzNM=/fit-in/599x599/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14174602-1569954525-5766.jpeg.jpg")
Album.create(name: "To Die For", artist: "Integrity", length: "72 minutes", rating: 4, img_url: "https://4.bp.blogspot.com/-OLVVP283Oqk/TbQ_DBNBz6I/AAAAAAAAMR8/oqWC45BG9hE/s1600/R-928632-1184880051.jpeg")
Album.create(name: "Noise", artist: "Boris", length: "90 minutes", rating: 3, img_url: "https://blogimg.goo.ne.jp/user_image/76/2c/378b1493ac71b47389b65bdd8909006d.jpg")