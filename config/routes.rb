Rails.application.routes.draw do
  resources :recipes, only: [:index, :create]
  resources :users, only: [:create, :show]
  
  post '/login', to: 'sessions#create'
  # get '/recipes', to: 'users#show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
