function shallowCopy(obj){
  var ObjectCopy = [];
  
  if(obj instanceof Date){
    return new Date(obj);
  }
  
  for(var key in obj) {
    ObjectCopy[key] = obj[key];
  }
  return ObjectCopy;
}


var a = { x: 1, y: 2, z: [1, 2, 3] };
var b = shallowCopy(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1

// Но a.z и b.z указывают на один и тот же массив: 
b.z.push(4);
console.log(a.z); // [1, 2, 3, 4]

var с = new Date(2014, 1, 1);
var d = shallowCopy(c);
d.setFullYear(2015);
console.log(c.getFullYear()); // 2014
