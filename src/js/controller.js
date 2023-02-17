//import icons from '../img/icons.svg';
import * as model from './model.js';
import recipeView from './views/RecipeView.js';

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
 await model.loadSearchResults("pizza");
  }
  catch (err) {
    
    //console.error(err);
   recipeView.renderError();
   

  }

    // recipeContainer.innerHTML = '';
    // recipeContainer.insertAdjacentHTML('afterbegin', markup);

}
//showRecipe();

//---- renderSpinner


 //window.addEventListener('hashchange',showRecipe);
 //window.addEventListener('load',showRecipe);
 
function init(){
  recipeView.addHandlerRender(controlRecipes);
}

init();