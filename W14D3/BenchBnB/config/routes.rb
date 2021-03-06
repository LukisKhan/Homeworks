Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :benches, only: [:index, :create]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :new]
  end
end
