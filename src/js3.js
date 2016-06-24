function  map(fn, array) {
	var newArray = [];
	for (var i = 0; i < array.length ; i++) {
		newArray[i] = fn(array[i]);
	};
	return newArray;
}
