
const express = require("express");


module.exports = function (services) {

    /**
    * Fetches a random recipe.
    */
    function fetchRandomRecipe(req, res) {
        services.fetchRandomRecipe()
        .then(recipes => res.send(recipes));
    }

    const router = express.Router();

    router.get("/random", fetchRandomRecipe);

    return router;
};
