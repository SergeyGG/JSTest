function fmap(a, fn) {
	return function() {
		return a(fn.apply(null, arguments));
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
     

    
     
function add(a, b) { 
    return a + b; 
}
     
