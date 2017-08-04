var Sales = (function() {

	var jsonFiles = ['products.json', 'departments.json'];

	let dataFromJSON = [];
	let departments = [];

	console.log("Seasonal Sales");

	return {

		getJSON: function(callback) {

			for (let i = 0; i < jsonFiles.length; i++) {

				let productsXHR = new XMLHttpRequest();

				productsXHR.addEventListener('load', function(e) {
					dataFromJSON.push(JSON.parse(e.target.responseText));
					
				});
				productsXHR.addEventListener('error', function() {
					console.log("Error loading JSON file.");
				});

				productsXHR.open('GET', jsonFiles[i], false);
				productsXHR.send();
			
			}

			// console.log(dataFromJSON);
			showProducts(dataFromJSON);
		}

	}

})();