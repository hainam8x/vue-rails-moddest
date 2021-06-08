class CreateWidgets < ActiveRecord::Migration[6.1]
  def change
    create_table :widgets do |t|
      t.string :style
      t.string :color
      t.boolean :runcible

      t.timestamps
    end
  end
end
