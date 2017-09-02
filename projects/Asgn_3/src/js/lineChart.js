"use strict";

/* Get or create the application global variable */
var App = App || {};

var ParticleSystem = function() {

  // setup the pointer to the scope 'this' variable
  var self = this;

  // data container
  var data = [];

  self.createLineChart = function() {

  };


  // data loading function
  self.loadData = function(file) {

    // read the csv file
    d3.csv(file)
      // iterate over the rows of the csv file
      .row(function(d) {

        // get the min bounds
        bounds.minX = Math.min(bounds.minX || Infinity, d.Points0);
        bounds.minY = Math.min(bounds.minY || Infinity, d.Points2);
        bounds.minZ = Math.min(bounds.minZ || Infinity, d.Points1);

        // get the max bounds
        bounds.maxX = Math.max(bounds.maxX || -Infinity, d.Points0);
        bounds.maxY = Math.max(bounds.maxY || -Infinity, d.Points2);
        bounds.maxZ = Math.max(bounds.maxY || -Infinity, d.Points1);

        // add the element to the data collection
        data.push({
          // concentration density
          concentration: Number(d.concentration),
          // Position
          X: Number(d.Points0),
          Y: Number(d.Points2),
          Z: Number(d.Points1),
          // Velocity
          U: Number(d.velocity0),
          V: Number(d.velocity2),
          W: Number(d.velocity1)
        });
      })
      // when done loading
      .get(function() {
        // create the particle system
        self.createLineChart();
      });
  };


}
