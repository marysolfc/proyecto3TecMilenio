import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
    recipe: {},
    search : {
      query : "",
      results: []
    }
}

export async function loadRecipe(id){
    try {
        //const resp = await fetch(`${API_URL}/${id}`);
        //const data = await resp.json();
        const data = await getJSON(`${API_URL}/${id}`)
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
         console.log(state.recipe);
    }
    catch (err) {
        //console.error(err);
        console.log(`${err} 💥💥💥💥`);
        throw err;
      }
}

export async function loadSearchResults(query){
  try {
    state.search.results= query;

    //const resp = await fetch(`${API_URL}/?search=${query}`);
        //const data = await resp.json(); 
        const data = await getJSON(`${API_URL}/?search=${query}`);
        state.search.results = data.data.recipes.map(rec => {
          return {
          id: rec.id,
          title: rec.title,
          publisher: rec.publisher,
          image: rec.image_url,
          };
          });
          console.log("resultados query model: ");
console.log(state.search.results);

  } catch (error) {
    console.log(`${error} 💥💥💥💥`);
    throw error;
  }
}