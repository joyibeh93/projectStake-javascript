class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(item => item !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(iterable) {
      const group = new Group();
      for (const value of iterable) {
        group.add(value);
      }
      return group;
    }
  }
  
  // Example usage:
  
  //const group = new Group();
  //group.add(10);
  //group.add(20);
  //group.add(30);
  
  //console.log(group.has(10)); // Output: true
  //console.log(group.has(40)); // Output: false
  
  //group.delete(20);
  //console.log(group.has(20)); // Output: false
  
  //const iterable = [1, 2, 3, 3, 4, 5];
  //const newGroup = Group.from(iterable);
  //console.log(newGroup.members); // Output: [1, 2, 3, 4, 5]
  
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false