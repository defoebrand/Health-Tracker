require 'test_helper'

class ApiCallsTest < ActionDispatch::IntegrationTest
  test 'should return data for all users' do
    get '/api'
    assert_equal 8, @response.parsed_body.count
  end

  test 'should return user data matching an age query' do
    get '/api/age/32'
    assert_equal 4, @response.parsed_body.count
  end

  test 'should return user data matching a sex query' do
    get '/api/sex/XX'
    assert_equal 2, @response.parsed_body.count
  end

  test 'should return user data matching an ethnicity query' do
    get '/api/ethnicity/European'
    assert_equal 2, @response.parsed_body.count
  end

  test 'should return user data matching a height query' do
    get '/api/height/Metric/166'
    assert_equal 2, @response.parsed_body.count
  end
end
