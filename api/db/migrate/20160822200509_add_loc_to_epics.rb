class AddLocToEpics < ActiveRecord::Migration[5.0]
  def change
    add_column :epics, :lat, :decimal
    add_column :epics, :long, :decimal
  end
end
