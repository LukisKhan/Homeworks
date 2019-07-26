class User < ApplicationRecord
    validates :user_name, presence:true
    validates :password_digest, presence:true
    validates :session_token, presence:true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token
    attr_reader :password

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def self.find_by_credentials(user_name, password)
        user = User.find_by(user_name: user_name)
        # return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
        # nil
        return nil unless user && user.is_password?(password)
        user
    end
    
    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)        
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    private
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end
