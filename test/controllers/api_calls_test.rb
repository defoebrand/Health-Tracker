require 'test_helper'

class ApiCallsTest < ActionDispatch::IntegrationTest
  test 'should return data for all users' do
    get '/users'
    assert_equal 8, @response.parsed_body.count
  end
end
