class AddForeignKeys < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :appointments, :users, dependent: :delete
  end
end
