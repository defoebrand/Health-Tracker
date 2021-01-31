class AddForeignKeysToTables < ActiveRecord::Migration[6.1]
  def change
  add_foreign_key :appointments, :doctors, dependent: :delete
  end
end
