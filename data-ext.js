
const fetch = require("node-fetch");

const database = require("./database");

const NUMBER_OF_RANDOM_RECIPES = 100;

/**
 * All data is fetched from Spoonacular.
 */

/**
 * One api call per day that fetches 100 random recipes.
 */

/**
 * Fetches a random recipe from the list of random recipes.
 * @returns random recipe
 */
function fetchRandomRecipe() {
    return database.randomRecipes[Math.floor(Math.random() * NUMBER_OF_RANDOM_RECIPES)];
}

module.exports = {
    fetchRandomRecipe
};
