class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :minutes_to_compete
end
