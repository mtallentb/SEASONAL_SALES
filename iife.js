console.log("IIFE Loaded");

let targetDiv = document.getElementById("targetDiv");
let discountDropdown = document.getElementById("discountDropdown");
let products;
let department;
let apparel = [];
let furniture = [];
let household = [];



function showProducts(data) {
	products = data[0].products;
	console.log(products);

	// for (let i = 0; i < products.products.length; i++) {
	// 	// console.log(products.products[i].name);

	// 		if (products.products[i].category_id === 1) {
	// 			department = "Apparel";
	// 			apparel.push(products.products[i].name);
	// 		} else if (products.products[i].category_id === 2) {
	// 			department = "Furniture";
	// 			furniture.push(products.products[i].name);
	// 		} else if (products.products[i].category_id === 3) {
	// 			department = "Household"
	// 			household.push(products.products[i].name);
	// 		}



	// 	targetDiv.innerHTML += `<h2>${products.products[i].name}</h2>
	// 							<h4>${products.products[i].price}</h4>
	// 							<h5>${department}<h5>`;}
} 

	// console.log(apparel);
	// console.log(furniture);
	// console.log(household);

	discountDropdown.addEventListener('change', function() {
		let discount = event.target.value;
		console.log("Current Discount: ", discount);

			for (let i = 0; i < apparel.length; i++) {
				console.log("Current Department: ", department);
				if (discount === 'winter') {
					products.products[i].price = products.products[i].price - (products.products[i].price * .10).toFixed(2);
					console.log("Current Product: ", products.products[i].name);
					console.log("Discounted Price: ", products.products[i].price);
				}
			}

			for (let i = apparel.length; i < (apparel.length + furniture.length); i++) {
				console.log("Current Department: ", department);
				if (discount === 'autumn') {
					products.products[i].price = products.products[i].price - (products.products[i].price * .25).toFixed(2);
					console.log("Current Product: ", products.products[i].name);
					console.log("Discounted Price: ", products.products[i].price);
				} 
			}

			for (let i = (apparel.length + furniture.length); i < (apparel.length + furniture.length + household.length); i++) {
				console.log("Current Department: ", department);
				if (discount === 'spring') {
					products.products[i].price = products.products[i].price - (products.products[i].price * .15).toFixed(2);
					console.log("Current Product: ", products.products[i].name);
					console.log("Discounted Price: ", products.products[i].price);
				}
			}
	});
}

Sales.getJSON(showProducts);
