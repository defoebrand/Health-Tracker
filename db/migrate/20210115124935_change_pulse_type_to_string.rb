class ChangePulseTypeToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :pulse, :string
  end
end
