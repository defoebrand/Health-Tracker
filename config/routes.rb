Rails.application.routes.draw do
  root 'homepage#index'

  # resources :homepage, module: :api do
  #   resources :homepage, only: %i[users]
  # end
  # namespace :api do
  scope path: '/api' do
    get '/', to: 'homepage#allusers'
  end
  scope path: '/api/id' do
    get '/:id', to: 'homepage#user'
  end
  scope path: '/api/age' do
    get '/:age', to: 'homepage#search_by_age'
  end
  
  # resources :homepage, module: 'api'
  
  # scope path: "/api", as: 'admin' do
    # resources :homepage, only: %i[users]
  # end





  resources :user do
    collection do
      post 'login'
    end
  end

  # get 'homepage/SignIn'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
