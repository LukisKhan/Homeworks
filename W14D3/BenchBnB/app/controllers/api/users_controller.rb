class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      render text: "this is users create, unsaved"
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
