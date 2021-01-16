class ChangeBloodPressuresTypesToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :systolic, :string
    change_column :users, :diastolic, :string
  end
end
