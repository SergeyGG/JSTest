function partialAny(fn) {	
    	//js6 = Js5 + for(i = 0; i < newArgs.length; i++){...}
        var args = Array.prototype.slice.call(arguments, 1);
     
    	return function() {
    		var argsArray = Array.prototype.slice.call(arguments);
     		var newArgs = args.concat(argsArray);
     		var j = 0;
     		for (var i = 0; i < newArgs.length; i++) {
     			if (newArgs[i] === undefined) {
     				newArgs[i] = arguments[j];
     				j++;
     			};
     		};
     		var x = fn.apply(null, newArgs);
    		return x;
    	}
    }
     
     
function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
var test1_3 = partialAny(test, 1, undefined, 3);

console.log(test1_3(5)); // a=1,b=5,c=3

