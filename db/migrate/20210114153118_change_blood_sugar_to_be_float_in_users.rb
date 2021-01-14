class ChangeBloodSugarToBeFloatInUsers < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :blood_sugar, :float
  end
end
