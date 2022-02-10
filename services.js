

const NUMBER_OF_RANDOM_RECIPES = 100;


module.exports = function (database, data_ext) {

    /**
     * Fetches a random recipe from the list of random recipes.
     * 
     * If no list of random recipes was fetched externally today yet, fetch a new list.
     * 
     * @returns random recipe
     */
    async function fetchRandomRecipe() {
        let recipes;

        if(!database.fetchedRandomToday()){
            recipes = await data_ext.fetchRandomRecipes(NUMBER_OF_RANDOM_RECIPES);
            database.setRandomRecipes(recipes);
        }
        else recipes = database.getRandomRecipes();

        return recipes[Math.floor(Math.random() * NUMBER_OF_RANDOM_RECIPES)]
    }

    return {
        fetchRandomRecipe
    }
}
