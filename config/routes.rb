Rails.application.routes.draw do
  root 'sessions#new'

  resources :sessions, only: %i[index new create]

  resources :doctors, only: %i[index]

  resources :communities, only: %i[index show update]
  
  resources :appointments, only: %i[create destroy]

  resources :users, only: %i[index show create update]

  get '/api', to: 'users#index'
end
