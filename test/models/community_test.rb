require 'test_helper'

class CommunityTest < ActiveSupport::TestCase
  def setup
    @community_one = communities(:one)
    @community_two = communities(:two)
  end

  test 'database should accept new community creation' do
    community = Community.new(name: 'support',
                              description: 'Support for sufferers',
                              image: '/images/support.png')
    assert community.valid?
  end
end
