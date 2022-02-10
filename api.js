
const express = require("express");
const bodyParser = require('body-parser');

const OpenApiValidator = require('express-openapi-validator');


module.exports = function (services) {

	/**
	* Fetches a random recipe.
	*/
	function fetchRandomRecipe(req, res) {
		const simple = req.query.simple;

		services.fetchRandomRecipe(simple)
			.then(recipes => res.send(recipes))
			.catch(err => {
				console.log("---ERROR START---");
				console.log(err);
				console.log("---ERROR END---");

				res.status(500);
				res.send(err);
			});
	}

	const router = express.Router();

	router.use(bodyParser.json());

	router.use(
		OpenApiValidator.middleware({
			apiSpec: 'docs/api-spec.yaml',
			validateRequests: true,
			validateResponses: false
		}),
	);

	router.get("/random", fetchRandomRecipe);


	router.use((err, req, res, next) => {
		res.status(err.status || 500).json({
			message: err.message,
			errors: err.errors,
		});
	});

	return router;
};
