Rails.application.routes.draw do
  root 'sessions#new'

  resources :sessions, only: %i[index new create]

  resources :doctors, only: %i[index]

  resources :communities, only: %i[index show update]
  
  resources :appointments, only: %i[create destroy]

  resources :users do
    collection do
      patch 'settings'
    end
  end

  scope path: '/api' do
    get '/', to: 'users#index'
    get '/age/:age/:range', to: 'users#index'
    get '/sex/:sex', to: 'users#index'
    get '/gender/:gender', to: 'users#index'
    get '/ethnicity/:ethnicity', to: 'users#index'
    get '/height/:scale/:height', to: 'users#index'
    get '/weight/:scale/:weight', to: 'users#index'
  end
end
