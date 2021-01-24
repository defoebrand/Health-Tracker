require 'test_helper'

class UsersCommunityTest < ActiveSupport::TestCase
  def setup
    @current_user = users(:good_user)
    @community_one = communities(:one)
    @community_two = communities(:two)
    @current_user.communities << @community_one
    @current_user.communities << @community_two
  end
  test 'database should recognize current_user communities' do
    assert_equal 2, @current_user.communities.size
    assert_not_equal 1, @current_user.communities.size
  end

  test 'database should recognize community_one users' do
    assert_equal 1, @community_one.users.size
    assert_not_equal 2, @community_one.users.size
  end

  test 'database should recognize community_two users' do
    assert_equal 1, @community_two.users.size
    assert_not_equal 2, @community_two.users.size
  end
end
