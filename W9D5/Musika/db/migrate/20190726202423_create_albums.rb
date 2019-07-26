class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :band_id
      t.string :title
      t.integer :year
      t.boolean :studio

      t.timestamps
    end
    add_index :albums, :band_id
  end
end
