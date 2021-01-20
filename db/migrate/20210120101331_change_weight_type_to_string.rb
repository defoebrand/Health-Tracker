class ChangeWeightTypeToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :weight, :string
  end
end
