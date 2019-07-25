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

class User < ApplicationRecord
   validates :username, presence: true, uniqueness: true
   validates :password_digest, presence: { message: 'Password can\'t be blank' } 
   validates :password, length: { minimum: 5, allow_nil: true}
   before_validation :ensure_session_token

    attr_reader :password

    def self.find_by_credentials
        
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        session_token = generate_session_token
        user.save!
        session_token
    end

    def ensure_session_token
        session_token ||= generate_session_token
    end

    def password=(user_password)
        @password = user_password
        password_digest = BCrypt.encrypt(user_password)
    end

end
