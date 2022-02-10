
const fetch = require("node-fetch");

const SPOONACULAR_API_URL = "https://api.spoonacular.com";
const SPOONACULAR_API_KEY = "6f80a2b850524b7bb2bb15b5c9a151ad";

/**
 * All data is fetched from Spoonacular.
 */

/**
 * Fetches random recipes.
 * @returns list of random recipes
 */
async function fetchRandomRecipes(numberOfRecipes) {
	const res = await fetch(`${SPOONACULAR_API_URL}/recipes/random?number=${numberOfRecipes}&apiKey=${SPOONACULAR_API_KEY}`);
	const body = await res.json();
	if (res.status != 200) {
		throw body;
	}

	return body.recipes;
}

module.exports = {
	fetchRandomRecipes
};
