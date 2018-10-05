class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
    else
      render json: ['Incorrect username or password'], status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render(
        json: ['Must be logged in to log out. Please log in to log out.'],
        status: 404
      )
    end
  end
end
