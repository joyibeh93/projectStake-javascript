// roads.js
const buildGraph = require('./graph');

const roadsData = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

// Convert the array of road strings into two-element arrays
const roads = roadsData.map(str => str.split('-'));

// Build the graph using the buildGraph function from the ./graph module
const roadGraph = buildGraph(roads);

// Export the roadGraph for use in other modules
module.exports = roadGraph;
