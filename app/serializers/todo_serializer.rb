class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :description
  has_one :user
end
