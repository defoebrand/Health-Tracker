require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @current_user = users(:good_user)
    @user_missing_password = users(:bad_password)
    @user_missing_height = users(:bad_height)
    @user_missing_weight = users(:bad_weight)
  end

  test 'if email is not unique, database should deny user creation' do
    user = User.new(name: 'newUser',
                    email: 'user@user.com',
                    password: 'user',
                    height: '{ "height": 166 }',
                    weight: '{ "measurements": 85 }',
                    ethnicity: 'Central & South Asian',
                    sex: 'XX',
                    gender: 'Female')
    assert_not user.valid?
  end

  test 'if password is not included, database should deny user creation' do
    user = @user_missing_password
    assert_not user.valid?
  end

  test 'if height is not included, database should deny user creation' do
    user = @user_missing_height
    assert_not user.valid?
  end

  test 'if weight is not included, database should deny user creation' do
    user = @user_missing_weight
    assert_not user.valid?
  end

  test 'if email is unique, and password, height, and weight are present, database should create a new user' do
    user = @current_user
    assert user.valid?
  end
end
