class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user_name],
      params[:password]
    )
    if user
      session[:session_token] = user.reset_session_token!
      flash[:success] = "Logged in successfully."
      redirect_to cats_url
    else
      flash[:error] = "Wrong username and password combo"
      render :new, status: 401
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    flash[:success] = "Logged out"
    redirect_to cats_url
  end
end
