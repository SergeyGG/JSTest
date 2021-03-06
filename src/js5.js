function partial(fn) {	
	//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
	var args = Array.prototype.slice.call(arguments);
	var args = args.slice(1);

	return function() {
		var args1 = Array.prototype.slice.call(arguments);
 		//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 		var newArgs = args.concat(args1);
 		var x = fn.apply(null, newArgs);
		return x;
	}
}


function add(a, b) { return a + b; }
function mult(a, b, c, d) { return a * b * c * d; }

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6
