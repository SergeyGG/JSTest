Power.PLANT = "plant";
Power.SUN = "sun";
Power.HOUSE = "house";

function Power () {
	function Plant (power) {
		this.power = power;
	} 

	function Sun (power) {
		this.power = power;
	} 

	function House (power) {
		this.power = power;
	} 
}

Power.prototype.calculateAllPower = function(element) {

	var allPower = 0; 

	if (element == Power.PLANT) allPower += plant.power; 
	if (element == Power.SUN) allPower += sun.power;
	if (element == Power.HOUSE) allPower -= house.power;

	return allPower;
}
