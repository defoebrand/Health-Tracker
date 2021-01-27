class UsersController < ApplicationController
  before_action :authorized, only: %i[show update]

  def index
    if params.each.count < 3
      display_users(User.all)
    else
      @returned_users = []
      params.each do |param|
        next if %w[controller action scale range].include?(param[0])

        if param[0] == 'height'
          height = (params[:height].to_f / 100) if params[:scale] == 'Metric'
          @returned_users << User.where('height = ?', "{\"height\":#{height},\"scale\":\"#{params[:scale]}\"}")
        end
        if param[0] == 'weight'
          @returned_users << User.where(
            'weight LIKE ?',
            '{"measurements":{"' + '%' + "\":#{params[:weight]}},\"scale\":\"Metric\"}"
          )
          puts @returned_users
        end
        if param[0] == 'age'
          @returned_users << User.where(
            "#{param[0]} >= ? and #{param[0]} <= ?",
            (param[1].to_i - params[:range].to_i),
            (param[1].to_i + params[:range].to_i)
          )
        end
        @returned_users << User.where("#{param[0]} = ?", (param[1]).to_s)
      end
      display_users(@returned_users.flatten.uniq)
    end
  end

  def show
    render json: {
      communities: @current_user.communities,
      doctors: @current_user.doctors.uniq,
      appointments: @current_user.appointments
    }
  end

  def create
    @user = User.create!(user_params)

    if @user.valid?
      token = encode_token({ user_id: @user.id })
      render json: { user: User.find(@user.id), token: token }
    else
      render json: { error: 'Incorrect Input Supplied' }
    end
  end

  def update
    ApplicationRecord.transaction do
      if %w[name email password].include?(user_params)
        user_params.each do |param|
          @current_user.update!(param[0] => user_params[param[0]]) if @current_user[param[0]] != user_params[param[0]]
        end
      else
        user_params.each do |param|
          @current_user.update!(param[0] => user_params[param[0]]) if user_params[param[0]] != '{}'
        end
      end
      render json: { user: @current_user }
    end
  rescue ActiveRecord::RecordInvalid
    render json: { user: 'Invalid Input' }
  end

  private

  def user_params
    params.require(:user).permit(
      :id, :name, :email, :password,
      :age, :height, :weight, :gender,
      :dob, :sex, :ethnicity,
      :temperature, :pulse, :blood_sugar,
      :systolic, :diastolic
    )
  end
end
