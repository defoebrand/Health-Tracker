class ApplicationController < ActionController::Base
  before_action :authorized, only: %i[auth_header decoded_token logged_in_user logged_in?]

  private

  def encode_token(payload)
    JWT.encode(payload, 'yourSecret')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    return unless auth_header

    token = auth_header.split(' ')[1]
    begin
      JWT.decode(token, 'yourSecret', true, algorithm: 'HS256')
    rescue JWT::DecodeError
      nil
    end
  end

  def logged_in_user
    return unless decoded_token

    user_id = decoded_token[0]['user_id']
    @current_user = User.find_by(id: user_id)
  end

  def logged_in?
    return false unless logged_in_user

    true
  end

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end

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
end
