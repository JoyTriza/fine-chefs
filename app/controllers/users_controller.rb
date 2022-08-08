class UsersController < ApplicationController
  skip_before_action :authorized, only: :create
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def create
    user = User.create!(user_params)
    render json: user, status: :accepted
  end

  def show
    current_user =  User.find(session[:user_id])
    render json: current_user, status: :ok
  end


  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
