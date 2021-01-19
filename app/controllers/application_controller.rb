class ApplicationController < ActionController::Base
  require 'json_web_token'

  protected

  # Validates the token and user and sets the @current_user scope
  def authenticate_request!
    puts 'payload' + '-' + JsonWebToken.valid_payload(payload.first).to_s
    return invalid_authentication if !payload || !JsonWebToken.valid_payload(payload.first)

    load_current_user!
    invalid_authentication unless @current_user
  end

  # Returns 401 response. To handle malformed / invalid requests.
  def invalid_authentication
    render json: { error: 'Invalid Request' }, status: :unauthorized
  end

  private

  # Deconstructs the Authorization header and decodes the JWT token.
  def payload
    auth_header = request.headers['Authorization']
    puts 'auth_header' + '-' + auth_header.to_s
    token = auth_header.split(' ').last

    JsonWebToken.decode(token)
  rescue StandardError
    nil
  end

  # Sets the @current_user with the user_id from payload
  def load_current_user!
    puts payload[0]
    @current_user = User.find_by(id: payload[0]['user_id'])
    puts @current_user
  end
end
