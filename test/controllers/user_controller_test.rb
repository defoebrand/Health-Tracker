require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  def good_user
    {
      name: 'newUser',
      email: 'newuser@newuser.com',
      password: 'user',
      height: '{ "height": 166 }',
      weight: '{ "measurements": 85 }',
      ethnicity: 'Central & South Asian',
      sex: 'XX',
      gender: 'Female',
      age: 33
    }
  end

  test 'if controller receives correct input, it should create user and return JSON object with matching username' do
    post user_index_url, params: { user: good_user }
    assert_equal 'newUser', @response.parsed_body['user']['name']
    assert_not_equal '{}', @response.parsed_body['user']['name']
  end

  test 'if controller receives correct input, it should create user and return JSON object with matching email' do
    post user_index_url, params: { user: good_user }
    assert_equal 'newuser@newuser.com', @response.parsed_body['user']['email']
    assert_not_equal '{}', @response.parsed_body['user']['email']
  end

  test 'if controller receives correct input, it should create user and return JSON object with matching height' do
    post user_index_url, params: { user: good_user }
    assert_equal '{ "height": 166 }', @response.parsed_body['user']['height']
    assert_not_equal '{}', @response.parsed_body['user']['height']
  end

  test 'if controller receives correct input, it should create user and return JSON object with matching weight' do
    post user_index_url, params: { user: good_user }
    assert_equal '{ "measurements": 85 }', @response.parsed_body['user']['weight']
    assert_not_equal '{}', @response.parsed_body['user']['weight']
  end

  test 'with correct input, controller should create user and return JSON object with default value for systolic' do
    post user_index_url, params: { user: good_user }
    assert_equal '{}', @response.parsed_body['user']['systolic']
    assert_not_nil @response.parsed_body['user']['systolic']
  end

  test 'with correct input, controller should create user and return JSON object with default value for diastolic' do
    post user_index_url, params: { user: good_user }
    assert_equal '{}', @response.parsed_body['user']['diastolic']
    assert_not_nil @response.parsed_body['user']['diastolic']
  end

  test 'with correct input, controller should create user and return JSON object with default value for pulse' do
    post user_index_url, params: { user: good_user }
    assert_equal '{}', @response.parsed_body['user']['pulse']
    assert_not_nil @response.parsed_body['user']['pulse']
  end

  test 'with correct input, controller should create user and return JSON object with default value for temperature' do
    post user_index_url, params: { user: good_user }
    assert_equal '{}', @response.parsed_body['user']['temperature']
    assert_not_nil @response.parsed_body['user']['temperature']
  end

  test 'with correct input, controller should create user and return JSON object with default value for blood_sugar' do
    post user_index_url, params: { user: good_user }
    assert_equal '{}', @response.parsed_body['user']['blood_sugar']
    assert_not_nil @response.parsed_body['user']['blood_sugar']
  end

  test 'with correct input, controller should create user and return JSON object with default value for age' do
    post user_index_url, params: { user: good_user }
    assert_equal 33, @response.parsed_body['user']['age']
    assert_not_equal '{}', @response.parsed_body['user']['age']
  end

  test 'with correct input, controller should create user and return JSON object with default value for sex' do
    post user_index_url, params: { user: good_user }
    assert_equal 'XX', @response.parsed_body['user']['sex']
    assert_not_equal '{}', @response.parsed_body['user']['sex']
  end

  test 'with correct input, controller should create user and return JSON object with default value for ethnicity' do
    post user_index_url, params: { user: good_user }
    assert_equal 'Central & South Asian', @response.parsed_body['user']['ethnicity']
    assert_not_equal '{}', @response.parsed_body['user']['ethnicity']
  end

  test 'with correct input, controller should create user and return JSON object with default value for dob' do
    post user_index_url, params: { user: good_user }
    assert_nil @response.parsed_body['user']['dob']
    assert_not_equal '{}', @response.parsed_body['user']['dob']
  end

  test 'with correct input, controller should create user and return JSON object with default value for gender' do
    post user_index_url, params: { user: good_user }
    assert_equal 'Female', @response.parsed_body['user']['gender']
    assert_not_equal '{}', @response.parsed_body['user']['gender']
  end

  test 'if controller create action receives a previously used email, it should return incorrect input' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'user@user.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal '{"error":"Incorrect Input Supplied"}', @response.body
  end

  test 'if controller create action receives a missing weight parameter, it should return incorrect input' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newser@newUser.com',
        password: 'user',
        height: '{ "height": 166 }'
      }
    }
    assert_equal '{"error":"Incorrect Input Supplied"}', @response.body
  end

  test 'if controller create action receives a missing height parameter, it should return incorrect input' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newser@newUser.com',
        password: 'user',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal '{"error":"Incorrect Input Supplied"}', @response.body
  end

  test 'if controller create action receives a missing password parameter, it should return incorrect input' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newser@newUser.com',
        weight: '{ "measurements": 85 }',
        height: '{ "height": 166 }'
      }
    }
    assert_equal '{"error":"Incorrect Input Supplied"}', @response.body
  end
end
