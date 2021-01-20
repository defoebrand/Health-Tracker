class ChangeBloodSugarTypeToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :blood_sugar, :string
  end
end
