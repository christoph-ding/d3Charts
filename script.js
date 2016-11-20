function createRadarChart () {
  // read the inputs
  var dataSets = require('./inputs/data.json');
  var configurations = require('./inputs/style.json');

  // // create the canvas element, legend and axis
  var maximum = calculateChartBounds(dataSets.data);
  var axisLabels = gatherAxisLabels(dataSets.data[0]);
  // require('./buildRelief.js').buildRelief(maximum, configurations['relief']);

  // // visualize the datasets on the chart
  // require('./chartSingleDataset.js').visualizeData(dataSets, configurations['data']);  
}

// 
function calculateChartBounds (dataSets) {  
  var max = 0;
  // iterate through dataSets, looking for a maximum value to determine range
  for (var i = 0; i < dataSets.length; i++) {
    currentDataSet = dataSets[i];
    for (var j = 0; j < currentDataSet.length; j++) {
      if (currentDataSet[j].value > max) {
        max = currentDataSet[j].value;
      }
    }
  }
  return max;
}

function gatherAxisLabels(dataset) {
  var labels = {};
  for (var i = 0; i < dataset.length; i++) {
    var attribute = dataset[i].axis;
    console.log(attribute);
    if (!(labels.hasOwnProperty(attribute))) {
      labels[attribute] = true;
    }
  }

  return Object.keys(labels);
}

// run the program
createRadarChart();
