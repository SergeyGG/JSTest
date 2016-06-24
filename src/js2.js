function take(gen, x) {
	for (i = 0; i < x; i++) {
	alert( gen() );
	}
}

function sequence(start, step) {
	start = start || 0;
	step = step || 1;
	start -= step; 
	
	return function() {
		return start += step;
	}
}
