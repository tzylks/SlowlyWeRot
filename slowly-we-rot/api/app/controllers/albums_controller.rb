require 'pry'

class AlbumsController < ApplicationController
  
  get "/albums" do 
    Album.all.to_json
  end

  get '/albums/:id' do
    # look up the game in the database using its ID
    album = Album.find(params[:id])
    # send a JSON-formatted response of the game data
    album.to_json
  end

  delete '/albums/:id' do
      # find the review using the ID
      album = Album.find(params[:id])
      # delete the review
      album.destroy
      # send a response with the deleted review as JSON
      album.to_json
  end

  get '/user_favorites' do
   User.first.user_albums.all.to_json
  end

  post '/user_favorites' do
    favorite = UserAlbum.create(
      user_id: params[:user_id],
      album_id: params[:album_id],
      artist: params[:artist],
      name: params[:name],
      length: params[:length],
      rating: params[:rating],
      img_url: params[:img_url]
    )
    favorite.to_json
  end

 

  post '/albums' do
      album = Album.create(
        artist: params[:artist],
        name: params[:name],
        rating: params[:rating],
        img_url: params[:img_url],
        length: params[:length],
      )
     
      album.to_json
  end

  private 

  def album_params
    allowed_params = %w(name artist rating img_url length)
    params.select {|param,value| allowed_params.include?(param)}
  end
end