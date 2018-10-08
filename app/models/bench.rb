class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    return Bench.all if bounds.nil?
    return Bench.where(
      "lat <= ? AND lat >= ? AND lng <= ? AND lng >= ?",
      bounds["northEast"]["lat"],
      bounds["southWest"]["lat"],
      bounds["northEast"]["lng"],
      bounds["southWest"]["lng"],
    )
  end
end
