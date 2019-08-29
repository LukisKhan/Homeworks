class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.nil?
      @user = User.new
      render :new
    else
      log_in!(@user)
      # redirect_to user_url
      render :new
    end
  end

  def destroy
    @user = current_user
    if(@user)
      log_out!
      render "api/users/show"
    else
      render json: ["no current user"]
    end
    # if(current_user)
    #   render json: {}
    # else
      # return render json: {error:"error in destroy"}    # end
    # if (log_out!)
    # redirect_to new_api_session_url
    # redirect_to ("./static_pages/root.html.erb")
  end

  def new
    @user = User.new
    render :new
  end
end