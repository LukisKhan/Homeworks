class UsersController < ApplicationController
    # get '/users', to: 'users#index'
    # get '/users/:id', to: 'users#show'
    # post '/users', to: 'users#create'
    # put '/users/:id', to: 'users#update'
    # patch '/users/:id', to: 'users#update'
    # delete '/users/:id', to: 'users#destroy'
    # get '/users/new', to: 'users#new', as: 'new_user'
    # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
    def index
        users = User.all
        render json: users
    end
    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(params[:id])
        render json: user  
    end
    def update
        user = User.find(params[:id])
        user.update(user_params)
        if user.update(user_params)
            render json: user
        else
            render json: user.errors.full_messages, status: 422
        end
    end
    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end
    private
    def user_params
        params.require(:user).permit(:username)
    end
end

'/users?some_category[a_key]=another+value&
        some_category[a_second_key]=yet+another+value&
        some_category[inner_inner_hash][key]=value&
        something_else=aaahhhhh'