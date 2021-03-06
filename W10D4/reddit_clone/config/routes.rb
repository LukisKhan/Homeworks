Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:create, :new, :destroy]
  resources :links do
    resources :comments, only: [:create]
  end
  resources :comments, only: [:destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

