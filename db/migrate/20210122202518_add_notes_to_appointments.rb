class AddNotesToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :notes, :string
  end
end
