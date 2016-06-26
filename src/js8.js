// +http://lodash.com/docs#pluck


function pluck(array, property) {
    var keys = [];
    for(var i=0; i < array.length; i++){
        keys.push(array[i][property]);
    }
    return keys;
}


var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']