require 'test_helper'

class AppointmentTest < ActiveSupport::TestCase
  def setup
    @doc_one = doctors(:one)
    @current_user = users(:good_user)
  end
  test 'database should recognize doc_one appointments' do
    assert_equal 1, @doc_one.appointments.size
  end
  test 'database should recognize doc_two appointments' do
    assert_equal 1, @doc_one.appointments.size
  end
  test 'database should recognize user appointments' do
    assert_equal 2, @current_user.appointments.size
  end
end
