

const NUMBER_OF_RANDOM_RECIPES = 100;

function getSimpleRecipe(recipe){
	const simpleRecipe = {
		title: recipe.title
		
	}
	return simpleRecipe;
}

module.exports = function (database, data_ext) {

	/**
	 * Fetches a random recipe from the list of random recipes.
	 * 
	 * If no list of random recipes was fetched externally today yet, fetch a new list.
	 * 
	 * @param simple if the recipe is to be shown in its simple form
	 * @returns random recipe
	 */
	async function fetchRandomRecipe(simple) {
		let recipes;

		if (!database.fetchedRandomToday()) {
			recipes = await data_ext.fetchRandomRecipes(NUMBER_OF_RANDOM_RECIPES);
			console.log("fetched Random Externally ")
			await database.setRandomRecipes(recipes);
		}
		else recipes = await database.getRandomRecipes();

		let recipe = recipes[Math.floor(Math.random() * NUMBER_OF_RANDOM_RECIPES)];

		if(simple) recipe = getSimpleRecipe(recipe);

		return recipe;
	}

	return {
		fetchRandomRecipe
	}
}
