Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  
  post '/login', to: 'sessions#create'g
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
