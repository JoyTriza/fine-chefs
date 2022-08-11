class RecipesController < ApplicationController
      skip_before_action :authorized
    def create
        new_recipe = Recipe.create(recipe_params)
        render json: new_recipe, status: :created
    end
    def index
        render json: Recipe.all, status: :ok
    end

    private
    def recipe_params
        params.permit(:title, :instructions, :minutes_to_complete, :user_id)
    end
end
