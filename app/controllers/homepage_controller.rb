class HomepageController < ApplicationController
  def index; end

  def api
    if params.keys.count <= 2
      return_all_users
    else
      return_query
    end
  end

  private

  def return_all_users
    @users = User.all
    @return_user = sanitize_user(@users)
    render json: @return_user
  end

  def return_query
    @users = []
    params.each do |param|
      next if %w[action controller].include?(param[0])

      @users = User.where("#{param[0]} = ?", param[1])
      # User.where("#{param[0]} = ?", param[1]).find_each do |user|
      #   @users << user
      # end
    end
    @return_user = sanitize_user(@users)
    if !@return_user.count.zero?
      @unique_users = only_unique(@return_user)
      render json: @unique_users
      # render json: @return_user

    else
      render json: { message: 'No matching result' }
    end
  end

  def sanitize_user(user_array)
    @return_user = []
    user_array.each do |user|
      @user = {
        id: user.id,
        age: user.age,
        height: user.height,
        weight: user.weight,
        systolic: JSON.parse(user.systolic || '{}'),
        diastolic: JSON.parse(user.systolic || '{}'),
        pulse: JSON.parse(user.systolic || '{}'),
        temperature: JSON.parse(user.systolic || '{}'),
        blood_sugar: JSON.parse(user.systolic || '{}')
      }
      @return_user << @user
    end
    @return_user
  end

  def only_unique(users_to_return)
    return_users = users_to_return.uniq do |user|
      puts user['id']
      user['id']
    end
    return_users
  end
end
