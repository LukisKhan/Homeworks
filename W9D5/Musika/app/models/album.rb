# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  band_id    :integer
#  title      :string
#  year       :integer
#  studio     :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
end
