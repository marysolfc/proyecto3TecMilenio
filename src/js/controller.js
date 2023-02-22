//import icons from '../img/icons.svg';
import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/SearchView.js';
import resultsView from './views/ResultView.js';

//const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try{
  let id = window.location.hash.slice(1);
    if(!id) return;
    //console.log("idShow: "+id);
    //renderSpinner(recipeContainer);
 await model.loadRecipe(id);
 //const { recipe }= model.state;

 recipeView.renderSpinner();
 recipeView.render(model.state.recipe);
// await model.loadSearchResults("pizza");
  //await controlSearchResults("chicken");
  }
  catch (err) {
    
   recipeView.renderError();
  }
}
async function controlSearchResults(){
  try {
    const query = searchView.getQuery();
    if(!query) return;
    await model.loadSearchResults(query);
    resultsView.renderSpinner();
    resultsView.render(model.state.search.results);

  } catch (error) {
    recipeView.renderError();
    throw error;
  }
}
function init(){
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();