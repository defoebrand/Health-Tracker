Rails.application.routes.draw do
  root 'homepage#index'

  post '/user', to: 'user#create'

  resources :user do
    collection do
      post 'login'
    end
  end

  # get 'homepage/SignIn'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
