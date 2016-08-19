class CreateEpics < ActiveRecord::Migration[5.0]
  def change
    create_table :epics do |t|
      t.string :title
      t.string :name
      t.text :summary
      t.string :img_url

      t.timestamps
    end
  end
end
