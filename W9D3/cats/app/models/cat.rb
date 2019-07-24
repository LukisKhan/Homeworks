# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date
#  color       :text
#  name        :text             not null
#  sex         :text
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    COLORS = %w(brown black white red purple)
    validates :name, presence: true
    validates :color, inclusion: { in: COLORS, message: "That is not a valid color fool." }
    validates :sex, inclusion: { in: %w(M F), message: "That is not a valid sex, you're gross." }

    def age
        time_ago_in_words(birth_date) 
    end
    
end
