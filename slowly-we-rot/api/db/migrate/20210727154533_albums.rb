class Albums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :length
      t.integer :rating
      t.string :img_url
    end
  end
end
