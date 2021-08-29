class User < ApplicationRecord
    has_secure_password 
    has_many :todos
    validates :username, uniqueness: { case_sensitive: false }
end
