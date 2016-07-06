function defineType(data){
	var str = Object.prototype.toString.call(data);
	var cutStr = str.substring(8, str.length - 1);
	return cutStr;
}

var data = [1, 2, 3];
var res = defineType(data);
console.log (res);
