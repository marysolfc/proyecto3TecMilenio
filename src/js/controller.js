//import icons from '../img/icons.svg';
import * as model from './model.js';
import recipeView from './views/RecipeView.js';

//const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  let id = window.location.hash.slice(1);
    if(!id) return;
    //console.log("idShow: "+id);
    //renderSpinner(recipeContainer);
 await model.loadRecipe(id);
 //const { recipe }= model.state;

 recipeView.renderSpinner();
 recipeView.render(model.state.recipe);


    // recipeContainer.innerHTML = '';
    // recipeContainer.insertAdjacentHTML('afterbegin', markup);

}
//showRecipe();

//---- renderSpinner


 //window.addEventListener('hashchange',showRecipe);
 //window.addEventListener('load',showRecipe);
 let eventos = ['hashchange','load'];
  eventos.forEach((ev)=>{
    addEventListener(ev,controlRecipes);
  })
