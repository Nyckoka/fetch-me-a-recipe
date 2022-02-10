
const fetch = require("node-fetch");

const SPOONACULAR_API_URL = "https://api.spoonacular.com";

/**
 * All data is fetched from Spoonacular.
 */

/**
 * Fetches random recipes.
 * @returns list of random recipes
 */
async function fetchRandomRecipes(numberOfRecipes) {
    const res = await fetch(`${SPOONACULAR_API_URL}/recipes/random?number=${numberOfRecipes}`);
    const body = await res.json();
    return body.recipes;
}

module.exports = {
    fetchRandomRecipes
};
