Rails.application.routes.draw do
  root 'homepage#index'
  
  resources :user do
    collection do
      post 'login'
      patch 'settings'
      post 'add-community', to: 'add_community'
      post 'remove-community', to: 'remove_community'
      post 'community-users', to: 'community_users'
      post 'user-communities', to: 'user_communities'
      post 'appointment'
      post 'my-doctors', to: 'my_doctors'
      get 'doctors'
      get 'communities'
    end
  end

  scope path: '/api' do
    get '/', to: 'homepage#api'
  end


end
