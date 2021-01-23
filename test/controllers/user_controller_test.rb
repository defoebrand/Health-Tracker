require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
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
                    weight: '{ "measurements": 85 }')
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

  test 'if controller receives correct input, it should create user and return JSON object with matching username' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal 'newUser', @response.parsed_body['user']['name']
    assert_not_equal '{}', @response.parsed_body['user']['name']
  end

  test 'if controller receives correct input, it should create user and return JSON object with matching email' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal 'newuser@newuser.com', @response.parsed_body['user']['email']
    assert_not_equal '{}', @response.parsed_body['user']['email']
  end

  test 'if controller receives correct input, it should create user and return JSON object with matching height' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal '{ "height": 166 }', @response.parsed_body['user']['height']
    assert_not_equal '{}', @response.parsed_body['user']['height']
  end

  test 'if controller receives correct input, it should create user and return JSON object with matching weight' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal '{ "measurements": 85 }', @response.parsed_body['user']['weight']
    assert_not_equal '{}', @response.parsed_body['user']['weight']
  end

  test 'with correct input, controller should create user and return JSON object with default value for systolic' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }

    assert_equal '{}', @response.parsed_body['user']['systolic']
    assert_not_nil @response.parsed_body['user']['systolic']
  end

  test 'with correct input, controller should create user and return JSON object with default value for diastolic' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal '{}', @response.parsed_body['user']['diastolic']
    assert_not_nil @response.parsed_body['user']['diastolic']
  end

  test 'with correct input, controller should create user and return JSON object with default value for pulse' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal '{}', @response.parsed_body['user']['pulse']
    assert_not_nil @response.parsed_body['user']['pulse']
  end

  test 'with correct input, controller should create user and return JSON object with default value for temperature' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal '{}', @response.parsed_body['user']['temperature']
    assert_not_nil @response.parsed_body['user']['temperature']
  end

  test 'with correct input, controller should create user and return JSON object with default value for blood_sugar' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_equal '{}', @response.parsed_body['user']['blood_sugar']
    assert_not_nil @response.parsed_body['user']['blood_sugar']
  end

  test 'with correct input, controller should create user and return JSON object with default value for age' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_nil @response.parsed_body['user']['age']
    assert_not_equal '{}', @response.parsed_body['user']['age']
  end

  test 'with correct input, controller should create user and return JSON object with default value for sex' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_nil @response.parsed_body['user']['sex']
    assert_not_equal '{}', @response.parsed_body['user']['sex']
  end

  test 'with correct input, controller should create user and return JSON object with default value for ethnicity' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_nil @response.parsed_body['user']['ethnicity']
    assert_not_equal '{}', @response.parsed_body['user']['ethnicity']
  end

  test 'with correct input, controller should create user and return JSON object with default value for dob' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_nil @response.parsed_body['user']['dob']
    assert_not_equal '{}', @response.parsed_body['user']['dob']
  end

  test 'with correct input, controller should create user and return JSON object with default value for gender' do
    post user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'newuser@newuser.com',
        password: 'user',
        height: '{ "height": 166 }',
        weight: '{ "measurements": 85 }'
      }
    }
    assert_nil @response.parsed_body['user']['gender']
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
    assert_equal '{"error":"Incorrect input supplied"}', @response.body
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
    assert_equal '{"error":"Incorrect input supplied"}', @response.body
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
    assert_equal '{"error":"Incorrect input supplied"}', @response.body
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
    assert_equal '{"error":"Incorrect input supplied"}', @response.body
  end

  test 'login should return an error if username is incorrect' do
    post login_user_index_url, params: { user: { email: 'asdfasd', password: 'asdfasd' } }
    assert_equal '{"error":"Invalid username or password"}', @response.body
  end

  test 'login should return a token if username is correct' do
    post login_user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'user@user.com',
        password: 'user',
        height: '{"height": 166}',
        weight: '{"measurements": 85}'
      }
    }
    assert_not_nil @response.parsed_body['token']
  end

  test 'login verification should be unauthorized if authorization header is missing valid token' do
    get user_index_url
    assert_equal '{"message":"Please log in"}', @response.body
  end

  test 'login verification should return a user if token is valid' do
    post login_user_index_url, params: {
      user: {
        name: 'newUser',
        email: 'user@user.com',
        password: 'user',
        height: '{"height": 166}',
        weight: '{"measurements": 85}'
      }
    }
    get user_index_url, headers: { Authorization: "Bearer #{@response.parsed_body['token']}" }
    assert_equal 'user', @response.parsed_body['name']
    assert_not_nil @response.parsed_body['name']
  end
end
