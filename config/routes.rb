Rails.application.routes.draw do
  root 'homepage#index'
  
  resources :user do
    collection do
      post 'login'
      post 'add-community', to: 'add_community'
      post 'remove-community', to: 'remove_community'
      post 'community-users', to: 'community_users'
      post 'user-communities', to: 'user_communities'
      get 'communities'
    end
  end

  scope path: '/api' do
    get '/', to: 'homepage#api'
  end


end
