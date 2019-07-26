class UsersController < ApplicationController
  
  def new
    @user = User.new    #@user to give view :new access
    render :new         #:new is a get request with forms to accept params
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # login_user!(@user)
      redirect_to users/new_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:password, :email)
  end
end
