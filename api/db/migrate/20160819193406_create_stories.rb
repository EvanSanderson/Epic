class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :map_loc
      t.string :media_url
      t.text :summary
      t.references :epic, foreign_key: true

      t.timestamps
    end
  end
end
