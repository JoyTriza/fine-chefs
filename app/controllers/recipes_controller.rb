class RecipesController < ApplicationController
    skip_before_action :authorized
  def create
      # byebug
      new_recipe = Recipe.create(recipe_params)
      render json: new_recipe, status: :created
  end
  def index
      render json: Recipe.all.order('created_at DESC'), status: :ok
  end

  def update
       recipe = Recipe.find_by(id: params[:id])
       if recipe 
            recipe.update(recipe_params)
            render json: bird
            else
            render json: { error: "Recipe not found" }, status: :not_found
       end
    end

    def destroy
        recipe = Recipe.find_by(id: params[:id])
        if recipe
            recipe.destroy
            head :no_content
        else
            render json: {error: "Recipe not found"}, status: :not_found
        end
    end

  private
  def recipe_params
      params.permit(:title, :instructions, :minutes_to_complete, :user_id, :image_url)
  end
end
