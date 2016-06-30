/*constants*/
Hamburger.SIZE_SMALL = "SMALL";
Hamburger.SIZE_BIG = "big";

Hamburger.STUFFING_CHEESE = "cheese";
Hamburger.STUFFING_SALAD = "salad";
Hamburger.STUFFING_POTATOES = "potatoes";

Hamburger.TOPPING_SAUCE = "sauce";
Hamburger.TOPPING_MAYO = "mayo";

/*class*/
function  Hamburger (size, stuffing) {
	this.size = size;
	this.stuffing = stuffing;
	this.toppings = {
		toppingSauce: 0,
		toppingMayo: 0
	}

	this.correctArguments = function () {
		if (this.size == null &&
			this.stuffing == null) {
				throw new Error ("Не заданы размер или начинка");
		}
	}

	this.correctSize = function () {
		if (this.size != Hamburger.SIZE_SMALL &&
			this.size != Hamburger.SIZE_BIG) {
				throw new Error (this.size + " - это неверный размер");
		}
	}

	this.correctStuffing = function () {
		if (this.stuffing != Hamburger.STUFFING_CHEESE &&
			this.stuffing != Hamburger.STUFFING_SALAD &&
			this.stuffing != Hamburger.STUFFING_POTATOES) {
				throw new Error (this.stuffing + " - это неверная начинка");
		}
 	}
}

Hamburger.prototype.addTopping = function(topping) {

	if (topping == Hamburger.TOPPING_SAUCE ) this.toppings.toppingSauce++;
	if (topping == Hamburger.TOPPING_MAYO) this.toppings.toppingMayo++;

	if (topping != Hamburger.TOPPING_SAUCE &&
		topping != Hamburger.TOPPING_MAYO) {
		throw new Error ("Нет такого топпинга!");
	}

	if (this.toppings.toppingSauce >= 2) {
		this.toppings.toppingSauce = 1;
		throw new Error ("Слишком много приправы!");
	}

	if (this.toppings.toppingMayo >= 2) {
		this.toppings.toppingMayo = 1;
		throw new Error ("Слишком много майонеза!");
	}

}


Hamburger.prototype.calculateCalories = function() {
	
	var calories = 0;

	if (this.size == Hamburger.SIZE_SMALL) calories += 20;
	if (this.size == Hamburger.SIZE_BIG) calories += 40;
	
	if (this.stuffing == Hamburger.STUFFING_CHEESE) calories += 20;
	if (this.stuffing == Hamburger.STUFFING_SALAD) calories += 5;
	if (this.stuffing == Hamburger.STUFFING_POTATOES) calories += 10;
	
	if (this.toppings.toppingSauce == 1) calories += 0;
	if (this.toppings.toppingMayo== 1) calories += 5;
	
	return calories;
}

Hamburger.prototype.calculatePrice = function () {

	var price = 0;

	if (this.size == Hamburger.SIZE_SMALL) price += 50;
	if (this.size == Hamburger.SIZE_BIG) price += 100;
	
	if (this.stuffing == Hamburger.STUFFING_CHEESE) price += 10;
	if (this.stuffing == Hamburger.STUFFING_SALAD) price += 20;
	if (this.stuffing == Hamburger.STUFFING_POTATOES) price += 15;
	
	if (this.toppings.toppingSauce == 1) price += 15;
	if (this.toppings.toppingMayo== 1) price += 20;

	return price;
}


/*test*/
// маленький гамбургер с начинкой из сыра
var Hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
Hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", Hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", Hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
Hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит? 
console.log("Price with sauce: %f", Hamburger.calculatePrice());