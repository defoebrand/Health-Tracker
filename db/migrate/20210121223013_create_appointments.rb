class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :doctor
      t.string :user
      t.date :date
      t.time :time

      t.timestamps
    end
  end
end
