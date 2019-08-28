class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      redirect_to user_url
    else
      # render :new
      render text: "this is users create, unsaved"
    end
  end

  def show
    render json: { key: "value"}
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
