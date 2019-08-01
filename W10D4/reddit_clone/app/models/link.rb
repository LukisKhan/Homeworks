class Link < ApplicationRecord
    validates :url, :title, presence: true
    has_many :comments
    belongs_to :user
end
