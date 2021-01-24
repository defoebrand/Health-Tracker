require 'test_helper'

class SigninFlowTest < ActionDispatch::IntegrationTest
  def good_user
    {
      name: 'newUser',
      email: 'user@user.com',
      password: 'user',
      height: '{"height": 166}',
      weight: '{"measurements": 85}'
    }
  end

  test 'login should return an error if username is incorrect' do
    post login_user_index_url, params: { user: { email: 'asdfasd', password: 'asdfasd' } }
    assert_equal '{"error":"Invalid username or password"}', @response.body
  end

  test 'login should return a token if username is correct' do
    post login_user_index_url, params: { user: good_user }
    assert_not_nil @response.parsed_body['token']
  end

  test 'login verification should be unauthorized if authorization header is missing valid token' do
    get user_index_url
    assert_equal '{"message":"Please log in"}', @response.body
  end

  test 'login verification should return a user if token is valid' do
    post login_user_index_url, params: { user: good_user }
    get user_index_url, headers: { Authorization: "Bearer #{@response.parsed_body['token']}" }
    assert_equal 'user', @response.parsed_body['name']
    assert_not_nil @response.parsed_body['name']
  end
end
