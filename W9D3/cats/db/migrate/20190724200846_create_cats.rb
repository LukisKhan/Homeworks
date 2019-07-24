class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.date :birth_date
      t.text :color
      t.text :name, null: false
      t.text :sex
      t.text :description

      t.timestamps
    end
  end
end
