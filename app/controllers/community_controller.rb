class CommunityController < ApplicationController
  def index
    display_communities(Community.all)
  end

  def show
    @community = Community.find(params[:id])
    display_community_users(@community.users)
  end
end
