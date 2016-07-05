function deepCopy(obj){
 var ObjectCopy = [];
 
 if (obj instanceof Date) {
  return new Date(obj);
 }

 if (obj===null) {
 return null;
 }
 
 for (var key in obj) {
  if(typeof obj[key] == "object") {
   ObjectCopy[key] = deepCopy(obj[key]);
  }
  else {
  ObjectCopy[key] = obj[key];
  }
 }
return ObjectCopy;
}


var a = { x: 1, y: 2, z: [1, 2, 3], w: new Date(2014, 1, 1, 12, 0, 0) };
var b = deepCopy(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1

// a.z и b.z указывают на разные массивы: 
b.z.push(4);
console.log(a.z); // [1, 2, 3]

// a.w и b.w независимы друг от друга
b.w.setFullYear(2015);
console.log(a.w.getFullYear()); // 2014
