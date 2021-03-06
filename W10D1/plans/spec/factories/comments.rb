# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  goal_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryBot.define do
  factory :comment do
    user_id { 1 }
    body { "MyText" }
    goal_id { 1 }
  end
end
