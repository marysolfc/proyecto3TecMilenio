//import icons from '../img/icons.svg';
import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/SearchView.js';
import resultsView from './views/ResultView.js';
import paginationView from './views/PaginationView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try {
    let id = window.location.hash.slice(1);
    if (!id) return;
    await model.loadRecipe(id);

    recipeView.renderSpinner();
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
}
async function controlSearchResults() {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);
  } catch (error) {
    recipeView.renderError();
    throw error;
  }
}

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));

  paginationView.render(model.state.search);
};

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}

init();
