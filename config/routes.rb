Rails.application.routes.draw do
  root 'homepage#index'
  
  resources :user do
    collection do
      post 'login'
      post 'add-community', to: 'add_community'
      get 'communities'
    end
  end

  scope path: '/api' do
    get '/', to: 'homepage#api'
  end


end
