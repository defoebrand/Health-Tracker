class CreateUsersCommunities < ActiveRecord::Migration[6.1]
  def change
    create_table :users_communities do |t|
      t.belongs_to :user 
      t.belongs_to :community

      t.timestamps
    end
  end
end
