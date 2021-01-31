Rails.application.routes.draw do
  root 'homepage#index'

  resources :user do
    collection do
      post 'login'
      patch 'settings'
      post 'join_community'
      post 'leave_community'
      post 'user_communities'
      post 'add_appointment'
      post 'community_users'
      post 'cancel_appointment'
    end
  end

  post 'user_communities', to: 'user#user_communities'
  post 'user_doctors', to: 'user#user_doctors'
  post 'add_appointment', to: 'user#add_appointment'
  get 'user_appointments', to: 'user#user_appointments'

  scope path: '/api' do
    get '/', to: 'homepage#all'
    get '/age/:age', to: 'homepage#by_age'
    get '/sex/:sex', to: 'homepage#by_sex'
    get '/ethnicity/:ethnicity', to: 'homepage#by_ethnicity'
    get '/height/:scale/:height', to: 'homepage#by_height'
  end

  get 'doctors', to: 'homepage#doctors'
  get 'communities', to: 'homepage#communities'
end
