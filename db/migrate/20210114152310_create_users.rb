class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :height
      t.integer :weight
      t.integer :age
      t.integer :systolic
      t.integer :diastolic
      t.integer :pulse
      t.integer :temperature
      t.integer :blood_sugar

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
