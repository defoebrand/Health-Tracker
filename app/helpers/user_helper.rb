module UserHelper
  def query_switch(param, params)
    case param[0]
    when 'age'
      filter_by_age(params, param)
    when 'height'
      filter_by_height(params)
    when 'weight'
      filter_by_weight(params)
    else
      @returned_users << User.where("#{param[0]} = ?", (param[1]).to_s)
    end
  end

  def filter_by_age(params, param)
    @returned_users << User.where(
      "#{param[0]} >= ? and #{param[0]} <= ?",
      (param[1].to_i - params[:range].to_i),
      (param[1].to_i + params[:range].to_i)
    )
  end

  def filter_by_height(params)
    height = (params[:height].to_f / 100) if params[:scale] == 'Metric'
    @returned_users << User.where('height = ?', "{\"height\":#{height},\"scale\":\"#{params[:scale]}\"}")
  end

  def filter_by_weight(params)
    @returned_users << User.where(
      'weight LIKE ?',
      '{"measurements":{"' + '%' + "\":#{params[:weight]}},\"scale\":\"Metric\"}"
    )
  end
end
