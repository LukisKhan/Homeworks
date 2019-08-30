class Bench < ApplicationRecord
  validates :lat, :lng, presence: true

  def self.in_bounds(bounds)
    bounds = {
      "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
      "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    }
    arr = [];
    Bench.all.each do |bench|
      lat = bench["lat"].to_f
      lng = bench["lng"].to_f
      arr << bench if lat < bounds["northEast"]["lat"].to_f && 
      lat > bounds["southWest"]["lat"].to_f && 
      lng < bounds["northEast"]["lng"].to_f && 
      lng > bounds["southWest"]["lng"].to_f
    end
    arr
  end
end
