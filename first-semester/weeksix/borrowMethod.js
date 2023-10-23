let map = { one: true, two: true, hasOwnProperty: true };

// Fix the call, avoiding conflicts with the object's own property
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
