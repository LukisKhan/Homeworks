# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    it { should validate_presence_of(:username) }  
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:password_digest) }
  end

  describe "associations" do 
    it { should have_many(:goals) }
    it { should have_many(:comments) }
  end 

end
