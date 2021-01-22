class ChangeHeightTypeToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :height, :string
  end
end
