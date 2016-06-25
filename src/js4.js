function fmap(a, fn) {
	return function() {
		return a(fn.apply(null, arguments)); // javascript.ru/Function/apply
	}
}
