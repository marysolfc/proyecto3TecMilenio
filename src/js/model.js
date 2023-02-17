import { API_URL } from './config';
export const state = {
    recipe: {},
}

export async function loadRecipe(id){
    try {
        const resp = await fetch(`${API_URL}${id}`);
        const data = await resp.json();
        const recipe = data.data.recipe;
    
        state.recipe = {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.source_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookTime: recipe.cooking_time,
          ingredients: recipe.ingredients,
        };
        // console.log("valor del recipe del modelo")
        // console.log(state.recipe);
    }
    catch (err) {
        console.error(err);
        console.log(`${err} 💥💥💥💥`);
      }
}