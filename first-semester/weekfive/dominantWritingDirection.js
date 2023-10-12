// Define the SCRIPTS data containing information about different writing systems
const SCRIPTS = [
    {
      name: "Latin",
      ranges: [[0x0000, 0x024F], [0x1E00, 0x1EFF], [0x2C60, 0x2C7F]],
      direction: "ltr",
    },
    {
      name: "Arabic",
      ranges: [[0x0600, 0x06FF], [0x0750, 0x077F]],
      direction: "rtl",
    },
    // Add more script data as needed
  ];
  
  // Define the dominantDirection function
  function dominantDirection(text) {
    function characterScript(code) {
      for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from && code < to)) {
          return script;
        }
      }
      return null;
    }
  
    function countBy(items, groupName) {
      let counts = [];
      for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
          counts.push({ name, count: 1 });
        } else {
          counts[known].count++;
        }
      }
      return counts;
    }
  
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({ name }) => name !== "none");
  
    if (scripts.length === 0) {
      return "No dominant direction found";
    }
  
    return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
  }
  
  // Example usage:
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl
  