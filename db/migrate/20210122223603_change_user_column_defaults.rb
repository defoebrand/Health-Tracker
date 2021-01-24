class ChangeUserColumnDefaults < ActiveRecord::Migration[6.1]
  def change
      change_column_default :users, :blood_sugar, '{}'
      change_column_default :users, :systolic, '{}'
      change_column_default :users, :diastolic, '{}'
      change_column_default :users, :pulse, '{}'
      change_column_default :users, :temperature, '{}'
  end
end
