// Make the canvas
function makeCanvas (width, height) {
  console.log('making canvas...');
  // g is a group tag
  var canvas = d3.select('#body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', '#FFEEDD')
      .append('g');

}

// Make the legend
function insertLegend () {
  console.log('making legend...');

  var legend = d3.select('#body')
      .append('svg')
      .attr('width', 100)
      .attr('height', 40)
      .style('background', '#B8B8FF');

  var text = legend.append('text')
      .attr("x", 0)
      .attr("y", 10)
      .attr("font-size", "14px")
      .text("Legend");

}

// Make the axis and labels
function labelAxis (labels, maximum) {
  
}

// Make rings 
function makeRings (size) {

}

// build the entire relief - this is exposed
  // call each with correct option

// function buildRelief (maximum, options) {

// }

function buildRelief (maximum) {
  console.log('building relief...');
  makeCanvas(500, 500);
  insertLegend();
  // labelAxis();
  // makeRings();
}
