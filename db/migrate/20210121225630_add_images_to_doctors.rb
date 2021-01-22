class AddImagesToDoctors < ActiveRecord::Migration[6.1]
  def change
    add_column :doctors, :image, :string
  end
end
