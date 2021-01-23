require 'test_helper'

class HomepageControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get root_url
    assert_response :success
  end
end

class HomepageControllerAPITest < ActionDispatch::IntegrationTest
  test 'should return data for all users' do
    get '/api'
    # assert_equal '{}', @response.parsed_body

    assert_equal 8, @response.parsed_body.count
  end

  # test 'should return user data matching an age query' do
  #   get '/api?age=32'
  #   assert_equal 4, @response.parsed_body.count
  # end
  # test 'should return user data matching a height query' do
  #   get '/api?height=3'
  #   assert_equal 2, @response.parsed_body.count
  # end
  # test 'should return user data matching a weight query' do
  #   get '/api?weight=4'
  #   assert_equal 2, @response.parsed_body.count
  # end
end
