class Book < ApplicationRecord
  belongs_to :user
  has_one_attached :profile_image
  validates :title, presence: true
  validates :body, presence: true, length: { maximum: 200 }

  acts_as_taggable_on :tags
  
end
