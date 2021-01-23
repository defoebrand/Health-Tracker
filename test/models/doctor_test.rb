require 'test_helper'

class DoctorTest < ActiveSupport::TestCase
  def setup
    @doc_one = doctors(:one)
    @doc_two = doctors(:two)
  end

  test 'database should accept new doctor creation' do
    doctor = Doctor.new(name: 'newUser',
                        email: 'user@user.com',
                        password: 'user',
                        specialty: 'medicine',
                        quote: 'harm none',
                        image: '/images/dr-pic.png')
    assert doctor.valid?
  end
end
