class HomepageController < ApplicationController
  def index; end

  def all
    # if params.keys.count <= 2
    return_all_users
    # else
    #   return_query
    # end
  end

  def check_weight
    puts params
  end

  def check_height
    puts params
    render json: User.where('height = ?', JSON.parse(height)) # {}"{\"height\":#{params[:height]},\"scale\":\"Metric\"}")
  end
  # {params[:height] + params[:range]}

  # "rating >= :min_rating and rating <= :max_rating", :min_rating => min_rating, :max_rating => max_rating

  private

  def return_all_users
    @users = User.all
    @return_user = sanitize_user(@users)
    render json: @return_user
  end

  def return_query
    @users = []
    @users = check_height(params['height'], params['scale']) if params['height']
    @users = check_weight(params['weight'], params['scale']) if params['weight']
    # puts 'weight' if params['weight']
    # puts 'weight' if params['weight']
    # puts 'weight' if params['weight']
    # puts 'weight' if params['weight']
    # puts 'weight' if params['weight']
    # puts 'weight' if params['weight']
    # puts 'weight' if params['weight']
    # puts 'weight' if params['weight']
    # params.each do |param|
    #   next if %w[action controller].include?(param[0])
    #
    #   @users = if ['height'].include?(param[0])
    #              check_height(param[0], param[1], param[3])
    #            else
    #              check_weight(param[0], param[1], param[3])
    #            end
    #   # @users = User.where("#{param[0]} = ?", param[1])
    # end
    @return_user = sanitize_user(@users)
    if !@return_user.count.zero?
      # @unique_users = only_unique(@return_user)
      # render json: @unique_users
      render json: @return_user

    else
      render json: { message: 'No matching result' }
    end
  end

  # def check_height(param, scale)
  #   User.where('height = ?', "{\"height\":#{param},\"scale\":\"#{scale}\"}")
  # end

  # def check_weight(_param1, param2, param3)
  #   User.where('weight = ?', "{\"measurements\":{\"#{/[*]/}\":#{param2}},\"scale\":\"#{param3}\"}")
  # end

  def check_age; end

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
