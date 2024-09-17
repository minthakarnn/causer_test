var numArray = [1,2,3,4,5,6,7,8,9,10] 
console.log("Number Array: ",numArray)


function above5(value) {
	return value>5
}

var filterNumArr = numArray.filter(above5)
console.log("Filter number array",filterNumArr)
var shoppingList1 = ["milk","donut","cookie","chocolate","peanut butter"
		,"pepto Bismol","pepto Bismol (chocolate flavour)","pepto Bismol (cookie flavour)"]
console.log("shopping List: ",shoppingList1)

var searchValue = "Bismol"
function containFilter(value) {
	return value.indexOf(searchValue) !== -1
}

var searchedShoppingList = shoppingList1.filter(containFilter)
console.log("Searched Shopping List : ",searchedShoppingList) 