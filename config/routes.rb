Rails.application.routes.draw do
  root 'session#new'

  resources :session, only: %i[index new create]

  resources :doctor, only: %i[index]

  resources :community, only: %i[index show]

  resources :user do
    collection do
      patch 'settings'
      post 'join_community'
      post 'leave_community'
      post 'add_appointment'
      post 'cancel_appointment'
    end
  end

  post 'add_appointment', to: 'user#add_appointment'

  scope path: '/api' do
    get '/', to: 'user#index'
    get '/age/:age/:range', to: 'user#index'
    get '/sex/:sex', to: 'user#index'
    get '/gender/:gender', to: 'user#index'
    get '/ethnicity/:ethnicity', to: 'user#index'
    get '/height/:scale/:height', to: 'user#index'
    get '/weight/:scale/:weight', to: 'user#index'
  end
end
