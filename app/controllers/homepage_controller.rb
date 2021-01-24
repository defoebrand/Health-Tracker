class HomepageController < ApplicationController
  def doctors
    doctors = Doctor.all
    param_array = %w[id name specialty quote image]
    @return_doctors = []
    doctors.each do |doctor|
      @doctor = {}
      doctor.attributes.each do |param|
        @doctor[(param[0]).to_s] = param[1] if param_array.include?(param[0])
      end
      @return_doctors << @doctor
    end
    render json: @return_doctors
  end

  def communities
    communities = Community.all
    param_array = %w[id name image description]
    @return_communities = []
    communities.each do |community|
      @community = {}
      community.attributes.each do |param|
        @community[(param[0]).to_s] = param[1] if param_array.include?(param[0])
      end
      @return_communities << @community
    end
    render json: @return_communities
  end

  def all
    users = User.all
    display_users(users)
  end

  def by_age
    users = User.where('age = ?', params[:age])
    display_users(users)
  end

  def by_sex
    users = User.where('sex = ?', params[:sex])
    display_users(users)
  end

  def by_ethnicity
    puts params[:ethnicity].split(',')
    users = User.where('ethnicity = ?', params[:ethnicity])
    display_users(users)
  end

  def by_height
    height = (params[:height].to_f / 100) if params[:scale] == 'Metric'
    users = User.where('height = ?', "{\"height\":#{height},\"scale\":\"#{params[:scale]}\"}")
    display_users(users)
  end

  private

  def display_users(users)
    @return_user = sanitize_user(users)
    render json: @return_user
  end

  def sanitize_user(user_array)
    param_array = %w[height weight systolic diastolic pulse temperature blood_sugar]
    @return_user = []
    user_array.each do |user|
      @user = {}
      @user['id'] = user.id
      @user['age'] = user.age
      user.attributes.each do |param|
        @user[(param[0]).to_s] = JSON.parse(param[1] || '{}') if param_array.include?(param[0])
      end
      @return_user << @user
    end
    only_unique(@return_user)
  end

  def only_unique(users_to_return)
    # puts users_to_return
    return_users = users_to_return.uniq
    return_users
  end
end
