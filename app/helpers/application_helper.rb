module ApplicationHelper
  def display_users(users)
    @return_user = sanitize_user(users)
    render json: @return_user
  end

  def sanitize_user(user_array)
    param_array = %w[height weight systolic diastolic pulse temperature blood_sugar]
    @return_user = []
    user_array.each do |user|
      @user = {}
      @user['id'] = user_array.index(user)
      @user['age'] = user.age
      @user['sex'] = user.sex
      @user['gender'] = user.gender
      @user['ethnicity'] = user.ethnicity
      user.attributes.each do |param|
        @user[(param[0]).to_s] = JSON.parse(param[1] || '{}') if param_array.include?(param[0])
      end
      @return_user << @user
    end
    only_unique(@return_user)
  end

  def only_unique(users_to_return)
    return_users = users_to_return.uniq
    return_users
  end

  def display_community_users(user_array)
    param_array = %w[id name]
    @return_users = []
    user_array.each do |user|
      @user = {}
      user.attributes.each do |param|
        @user[(param[0]).to_s] = param[1] if param_array.include?(param[0])
      end
      @return_users << @user
    end
    render json: @return_users
  end

  def display_doctors(doctor_array)
    param_array = %w[id name specialty quote image]
    @return_doctors = []
    doctor_array.each do |doctor|
      @doctor = {}
      doctor.attributes.each do |param|
        @doctor[(param[0]).to_s] = param[1] if param_array.include?(param[0])
      end
      @return_doctors << @doctor
    end
    render json: @return_doctors
  end

  def display_communities(community_array)
    param_array = %w[id name image description]
    @return_communities = []
    community_array.each do |community|
      @community = {}
      community.attributes.each do |param|
        @community[(param[0]).to_s] = param[1] if param_array.include?(param[0])
      end
      @return_communities << @community
    end
    render json: @return_communities
  end

  def cleanse_user(user)
    @return_user = {}
    user.attributes.each do |attr|
      next if attr[0] == 'password_digest'

      @return_user[attr[0].to_s] = attr[1]
    end
    @return_user
  end
end
