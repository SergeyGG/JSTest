// +http://lodash.com/docs#filter

function filter (arr, fn) {
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (fn(arr[i])) {
			newArr.push(arr[i]);
		} 
	};
	return newArr;
}


var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]

console.log(input); // [1, 2, 3, 4, 5, 6]