class HomepageController < ApplicationController
  def index; end

  def allusers
    @users = []
    params.each do |param|
      @user = User.find_by(param[0] => param[1]) unless %w[action controller].include?(param[0])
    end
    # @users = User.all
    render json: {
      id: @user.id,
      age: @user.age,
      height: @user.height,
      weight: @user.weight,
      systolic: JSON.parse(@user.systolic),
      diastolic: JSON.parse(@user.systolic),
      pulse: JSON.parse(@user.systolic),
      temperature: JSON.parse(@user.systolic),
      blood_sugar: JSON.parse(@user.systolic)
    }
  end

  def user
    @user = User.find(params[:id])
    render json: @user
  end

  def search_by_age
    @user = User.find_by(age: params[:age])
    if @user
      render json: @user
    else
      render json: { message: 'No matching result' }
    end
  end
end
