// +http://lodash.com/docs#bind

function bind(funct, newThis) {
    return function () {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]); //через .push
        }
	    return funct.apply(newThis, args);
    }
}

window.x = 1;
var ctx = { x: 2 };

function testThis(a) { console.log("x=" + this.x + ", a=" + a); }
console.log(testThis(100)); // x=1, a=100
var boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100
