# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_27_154533) do

  create_table "albums", force: :cascade do |t|
    t.string "name"
    t.string "artist"
    t.string "length"
    t.integer "rating"
    t.string "img_url"
  end

  create_table "user_albums", force: :cascade do |t|
    t.integer "user_id"
    t.integer "album_id"
    t.string "artist"
    t.string "name"
    t.integer "rating"
    t.string "length"
    t.string "img_url"
    t.index ["album_id"], name: "index_user_albums_on_album_id"
    t.index ["user_id"], name: "index_user_albums_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
  end

  add_foreign_key "user_albums", "albums"
  add_foreign_key "user_albums", "users"
end
