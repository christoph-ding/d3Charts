
function createRadarChart () {
  // read the inputs
  var dataSets = require('./inputs/data.json');
  var configurations = require('./inputs/style.json');

  // create the canvas element, legend and axis
  var maximum = calculateChartBounds(dataSets.data);
  require('./buildRelief.js').buildRelief(maximum, configurations['relief']);

  // visualize the datasets on the chart
  require('./chartSingleDataset.js').visualizeData(dataSets, configurations['data']);  
}

// 
function calculateChartBounds (dataSets) {
  var max = 0;
  // iterate through dataSets, looking for a maximum value to determine range

  return max;
}

// run the program
createRadarChart();

