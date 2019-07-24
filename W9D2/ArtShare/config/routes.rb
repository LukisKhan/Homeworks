Rails.application.routes.draw do
  get 'artwork_shares_controller/create'
  get 'artwork_shares_controller/destroy'
  get 'artwork_shares_controller/user_params'
  get 'artwork_shares_controller/private'
  get 'artwork_shares_controller/test'
  # get 'artworks', to: 'artworks#index' 
  # post 'artworks', to: 'artworks#create' 
  # get 'artworks/:id', to: 'artworks#show' 
  # put 'artworks/:id', to: 'artworks#update' 
  # patch 'artworks/:id', to: 'artworks#update' 
  # delete 'artworks/:id', to: 'artworks#destroy' 
  
  resources :artworks, except: [:new, :edit, :index] 
  # get 'artworks', to: 'artworks#index' 
  # /users/:user_id/artworks
  resources :users do
    resources :artworks, only: [:index]
  end
  resources :artwork_shares, only: [:create, :destroy]

  
  post 'comments', to: 'comments#create'
  delete 'comments/:id', to: 'comment#destroy'
  get 'comments/:id', to: 'comment#index'
  

  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # post '/users', to: 'users#create'
  # put '/users/:id', to: 'users#update'
  # patch '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'
  # get '/users/new', to: 'users#new', as: 'new_user'
  # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'

end

