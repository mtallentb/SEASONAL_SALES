console.log("IIFE Loaded");

let targetDiv = document.getElementById("targetDiv");
let discountDropdown = document.getElementById("discountDropdown");
let products;
let departments;

function showProducts(data) {
	products = data[0].products;
	departments = data[1].categories;
	console.log(products);
	console.log(departments);

	//	Iterates over each product and lists info.

	for (let i = 0; i < products.length; i++) {

		productList.innerHTML += `<li><h5>${products[i].name}</h5></li>
		 						<li id="price"><h5>${products[i].price}</h5></li>
		 						`;

		if (products[i].category_id === 1) {
			productList.innerHTML += `<li><h5>${departments[0].name}</h5></li><br>`;
		} else if (products[i].category_id === 2) {
			productList.innerHTML += `<li><h5>${departments[1].name}</h5></li><br>`;
		} else if (products[i].category_id === 3) {
			productList.innerHTML += `<li><h5>${departments[2].name}</h5></li><br>`;
		}

	}

	//	Looks for a change in the <select> element. Depending on the `value` of the <select>,
	//	and the category_id, the function applies each respective seasonal discount to the price
	//	of each element.

	discountDropdown.addEventListener('change', function() {
		let afterWinterDiscount = [];
		let afterAutumnDiscount = [];
		let afterSpringDiscount = [];
		let winterDiscount = false;
		let autumnDiscount = false;
		let springDiscount = false;
		let discount = event.target.value;
		console.log("Current Discount: ", discount);

		for (let j = 0; j < products.length; j++) {

			if (discount === 'winter' && products[j].category_id === 1) {
				afterWinterDiscount.push({
					name: products[j].name,
					price: (products[j].price - (products[j].price * departments[0].discount)).toFixed(2)
				});
				winterDiscount = true;
			} else if (discount === 'autumn' && products[j].category_id === 2) {
				afterAutumnDiscount.push({
					name: products[j].name,
					price: (products[j].price - (products[j].price * departments[0].discount)).toFixed(2)
				});
				autumnDiscount = true;
			} else if (discount === 'spring' && products[j].category_id === 3) {
				afterSpringDiscount.push({
					name: products[j].name,
					price: (products[j].price - (products[j].price * departments[0].discount)).toFixed(2)
				});
				
				springDiscount = true;
			}
		}

		//	Logs the new prices into the console after having the discounts applied.

		if (winterDiscount === true) {
			afterWinterDiscount.forEach(function(element, index){
			let priceHeader = document.getElementById("price");
			console.log(afterWinterDiscount[index].price);
			// priceHeader = afterWinterDiscount[index].price;
			});

		} else if (autumnDiscount === true) {
			afterAutumnDiscount.forEach(function(price, index){
			console.log(afterAutumnDiscount[index].price);
			});

		} else if (springDiscount === true) {
			afterSpringDiscount.forEach(function(price, index){
			console.log(afterSpringDiscount[index].price);
			});
			
		}

	});
} 

Sales.getJSON(showProducts);
