class CommunitiesController < ApplicationController
  before_action :authorized, only: %i[join_community leave_community update]
  before_action :set_community, except: %i[index]

  def index
    display_communities(Community.all)
  end

  def show
    display_community_users(@community.users)
  end

  def update
    puts @current_user
    if @current_user.communities.include?(@community)
      @current_user.communities.delete(@community)
    else
      @current_user.communities << @community
    end
    display_community_users(@community.users)
  end

  private

  def set_community
    @community = Community.find(params[:id])
  end
end
