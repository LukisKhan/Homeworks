class Bench < ApplicationRecord
  validates :lat, :lng, presence: true

end
