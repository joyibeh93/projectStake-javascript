const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    const wasLocked = box.locked; // Check if the box was initially locked
    if (wasLocked) {
      box.unlock(); // Unlock the box if it was locked
    }
    
    try {
      body(); // Run the provided function
    } finally {
      if (wasLocked) {
        box.lock(); // Lock the box only if it was initially locked
      }
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  
  console.log(box.locked); // Should be true