class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    return nil if self.session[:session_token].nil?
    @user ||= User.find_by(session_token: self.session[:session_token])
  end

  def log_in!(user)
    user.reset_session_token!
    self.session[:session_token] = user.session_token
  end

  def log_out!
    self.session[:session_token] = nil
  end
end
