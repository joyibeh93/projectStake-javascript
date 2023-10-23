// Your code here.
class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // Method to add another vector to this vector
    plus(otherVec) {
      return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }
  
    // Method to subtract another vector from this vector
    minus(otherVec) {
      return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }
  
    // Getter property to compute the length (distance from the origin)
    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  
  // Example usage:
  //const vector1 = new Vec(3, 4);
  //const vector2 = new Vec(1, 2);
  
  //const sumVector = vector1.plus(vector2);
  //const diffVector = vector1.minus(vector2);
  
  //console.log(sumVector); // Output: Vec { x: 4, y: 6 }
  //console.log(diffVector); // Output: Vec { x: 2, y: 2 }
  //console.log(vector1.length); // Output: 5
  
  
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5