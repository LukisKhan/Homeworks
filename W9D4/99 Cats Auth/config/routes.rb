Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'sessions/create'
  # get 'sessions/destroy'
  resource :session, only: [:new, :create, :destroy]
  resources :users

  # SKELETON
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cats, except: :destroy
  resources :cat_rental_requests, only: [:new, :create] do
    member do
      post :approve
      post :deny
    end
  end

  root to: redirect('/cats')
end
