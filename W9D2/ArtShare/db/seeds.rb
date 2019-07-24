# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#!/usr/bin/env sh




User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all


users = User.create([
  { username: 'Beyonce' },
  { username: 'Nicki Minaj' },
  { username: 'Ciara' }
])

beyonce_artwork = Artwork.create([
  { title: 'Lemonade',image_url: 'test.com' ,artist_id: users.first.id },
  { title: 'I Am... Sasha Fierce',image_url: 'test.com' ,artist_id: users.first.id }
])

nicki_artwork = Artwork.create([
  { title: 'The Pinkprint', image_url: 'test.com', artist_id: users.second.id },
  { title: 'Pink Friday', image_url: 'test.com', artist_id: users.second.id }
])

ciara_artwork = Artwork.create([
  { title: 'Goodies', image_url: 'ciara_url.com', artist_id: users.third.id },
  { title: 'Ciara', image_url: 'ciara_url.com', artist_id: users.third.id }
])

all_shares = ArtworkShare.create([
    { artwork_id: beyonce_artwork.first.id, viewer_id: users.first.id },
    { artwork_id: beyonce_artwork.second.id, viewer_id: users.first.id },

    { artwork_id: nicki_artwork.first.id, viewer_id: users.second.id },
    { artwork_id: nicki_artwork.second.id, viewer_id: users.second.id },

    { artwork_id: ciara_artwork.first.id, viewer_id: users.third.id },
    { artwork_id: ciara_artwork.second.id, viewer_id: users.third.id }
])
# Table name: artwork_shares
#
#  id         :bigint           not null, primary key
#  artwork_id :integer
#  viewer_id  :integer

# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string

# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null