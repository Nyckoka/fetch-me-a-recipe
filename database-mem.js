

const randomRecipes = require("./randomRecipes.json").recipes;

const lastRandomFetchedDate = "2022-02-10";


/**
 * Sets a new list of random recipes.
 * @param {Array} recipes 
 */
function setRandomRecipes(recipes){
    randomRecipes = recipes;
    lastRandomFetchedDate = getTodayDate();
    
    //TODO write to randomRecipes.json
}


/**
 * Gets the list of random recipes.
 * @returns list of random recipes
 */
function getRandomRecipes(){
    return randomRecipes;
}


/**
 * Checks if the list of random recipes was already fetched externally today.
 * @returns true if the list of random recipes was already fetched externally today.
 */
function fetchedRandomToday(){
    const todayDate = getTodayDate();

    return lastRandomFetchedDate == todayDate;
}


/**
 * Returns today's date in yyyy-mm-dd format.
 * @returns today's date
 */
function getTodayDate(){
    return (new Date()).toISOString().split('T')[0];
}


module.exports = {
    setRandomRecipes,
    getRandomRecipes,
    fetchedRandomToday
};
