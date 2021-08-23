class UserAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :user_albums do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :album, foreign_key: true
    end
  end
end
