class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :instructions
      t.integer :minutes_to_complete
      t.integer :user_id

      t.timestamps
    end
  end
end
