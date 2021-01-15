class ChangePulseTypeFromIntToArr < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :pulse, :integer, json: true, default: "{}" 
  end
end
