class AddDateToStories < ActiveRecord::Migration[5.0]
  def change
    add_column :stories, :date, :date
  end
end
