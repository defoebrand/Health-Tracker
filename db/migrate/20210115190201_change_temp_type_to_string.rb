class ChangeTempTypeToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :temperature, :string
  end
end
