"use strict";

/* Get or create the application global variable */
var App = App || {};

var scatterPlot = function() {

  // setup the pointer to the scope 'this' variable
  var self = this;

  // data container
  var data = [];

  // scene graph group for the particle system
  var sceneObject = new THREE.Group();

  // bounds of the data
  var bounds = {};

  // creates the 2D particle system
  self.createParticleSystem = function() {
    var color = d3.scale.linear()
      .domain([0, 0.1])
      .range(['#1b9e77', '#7570b3']);

    // use self.data to create the particle system
    console.log("the value of data = " + JSON.stringify(data[2]));
    var geometry = new THREE.Geometry();
    var particleCount = 186845;
    var dotMaterial = new THREE.PointsMaterial({
      size: 1,
      color: 0x39cc00,
      sizeAttenuation: false
    });

    for (var i = 0; i < particleCount; i++) {
      var vertex = new THREE.Vector3();
      vertex.x = data[i].X;
      vertex.y = data[i].Y;

      geometry.vertices.push(vertex);
      geometry.colors.push(new THREE.Color(color(data[i].concentration)));

    }
    var psMat = new THREE.PointCloudMaterial();
    psMat.vertexColors = true;
    psMat.size = 0.09;
    var ps = new THREE.PointCloud(geometry, psMat);
    ps.sizeAttenuation = true;

    sceneObject.add(ps);

    // add axis helpers
    var axes = new THREE.AxisHelper(800);
    axes.position.set(-5, 0, 0);
    sceneObject.add(axes);
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
        self.createParticleSystem();
      });
  };

  // publicly available functions
  var publiclyAvailable = {

    // load the data and setup the system
    initialize: function(file) {
      self.loadData(file);
    },

    // accessor for the particle system
    getParticleSystems: function() {
      return sceneObject;
    }
  };

  return publiclyAvailable;
};
