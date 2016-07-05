function shallowCopy(obj){
  var ObjectCopy = [];
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
