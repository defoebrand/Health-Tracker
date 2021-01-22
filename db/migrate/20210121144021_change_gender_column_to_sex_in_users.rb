class ChangeGenderColumnToSexInUsers < ActiveRecord::Migration[6.1]
  def change
        rename_column :users, :gender, :sex
  end
end
