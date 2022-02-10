

const fs = require("fs/promises");

const randomRecipes = require("./randomRecipes.json");


/**
 * Sets a new list of random recipes.
 * @param {Array} recipes 
 */
function setRandomRecipes(recipes) {
	randomRecipes.recipes = recipes;
	randomRecipes.lastFetched = getTodayDate();

	return fs.writeFile("randomRecipes.json", JSON.stringify(randomRecipes, null, "\t"))
		.then((err) => console.log(err ? err : "Successfully written to randomRecipes.json"));
}


/**
 * Gets the list of random recipes.
 * @returns list of random recipes
 */
function getRandomRecipes() {
	return randomRecipes.recipes;
}


/**
 * Checks if the list of random recipes was already fetched externally today.
 * @returns true if the list of random recipes was already fetched externally today.
 */
function fetchedRandomToday() {
	return randomRecipes.lastFetched == getTodayDate();
}


/**
 * Returns today's date in yyyy-mm-dd format.
 * @returns today's date
 */
function getTodayDate() {
	return (new Date()).toISOString().split('T')[0];
}


module.exports = {
	setRandomRecipes,
	getRandomRecipes,
	fetchedRandomToday
};
