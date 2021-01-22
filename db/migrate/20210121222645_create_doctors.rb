class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :specialty
      t.string :quote

      t.timestamps
    end
    add_index :doctors, :email, unique: true
  end
end
