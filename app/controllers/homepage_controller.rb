class HomepageController < ApplicationController
  def doctors
    display_doctors(Doctor.all)
  end

  def communities
    display_communities(Community.all)
  end

  def all
    display_users(User.all)
  end

  def by_age
    display_users(User.where('age = ?', params[:age]))
  end

  def by_sex
    display_users(User.where('sex = ?', params[:sex]))
  end

  def by_ethnicity
    display_users(User.where('ethnicity = ?', params[:ethnicity]))
  end

  def by_height
    height = (params[:height].to_f / 100) if params[:scale] == 'Metric'
    display_users(User.where('height = ?', "{\"height\":#{height},\"scale\":\"#{params[:scale]}\"}"))
  end
end
