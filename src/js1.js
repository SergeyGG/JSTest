function sequence(start, step) {
	start = start || 0;
	step = step || 1;
	start -= step; 
	
	return function() {
		return start += step;
	}
}