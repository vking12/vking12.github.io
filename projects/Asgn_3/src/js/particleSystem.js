"use strict";

/* Get or create the application global variable */
var App = App || {};

var ParticleSystem = function() {

  // setup the pointer to the scope 'this' variable
  var self = this;

  // data container
  var data = [];

  // scene graph group for the particle system
  var sceneObject = new THREE.Group();

  // bounds of the data
  var bounds = {};

  // total number of particles in the data
  var particleCount = 186845;

  // create the box that will move through the data
  var boxG = new THREE.BoxGeometry(20, 10, 0.05);
  var boxM = new THREE.MeshLambertMaterial({
    // color: Math.random() * 0xffffff
    opacity: 0.5,
    transparent: true,
    color: 0xFCE014
  })

  var boxMesh = new THREE.Mesh(boxG, boxM);
  var zPos = 0;
  var zStep = 0.1;
  boxMesh.position.set(0, 5.5, zPos);
  sceneObject.add(boxMesh);


  // keyboard input to move across the data set
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'w') {
      // alert("w has been pressed");
      if (zPos <= 6) {
        zPos = zPos + zStep;
      }
      boxMesh.position.set(0, 5.5, zPos);
      sceneObject.add(boxMesh);
      self.create2DSlice();
      self.createParticleSystem();
    } else if (keyName === 's') {
      // alert("w has been pressed");
      if (zPos >= -6) {
        zPos = zPos - zStep;
      }
      boxMesh.position.set(0, 5.5, zPos);
      sceneObject.add(boxMesh);
      self.create2DSlice();
      self.createParticleSystem();
    } else if (keyName === 'p') {
      zStep = 1;
    } else if (keyName === 'o') {
      zStep = 0.1;
    }
  }, false);

  // create 2D chart of the data (this is a scatter plot)
  var margin = {
      top: 20,
      right: 400,
      bottom: 60,
      left: 60
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var color = d3.scale.linear()
    .domain([0, 0.1])
    .range(['#1b9e77', '#7570b3']);

  var x = d3.scale.linear()
    .domain([-5, 5])
    .range([0, width]);

  var y = d3.scale.linear()
    .domain([0, 10])
    .range([height, 0]);

  var chart = d3.select('.box2')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart')

  var main = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'main')

  // draw the x axis
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom');

  main.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('class', 'main axis date')
    .call(xAxis);

  // draw the y axis
  var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left');

  main.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'main axis date')
    .call(yAxis);

  var g = main.append("g");


  // create the containment box.
  // it's a simple cylnder at the bottom to help orient the user
  self.drawContainment = function() {
    // get the radius and height based on the data bounds
    var radius = (bounds.maxX - bounds.minX) / 2.0 + 1;
    // var height = (bounds.maxY - bounds.minY) + 1;
    var height = 1;

    // create a cylinder to contain the particle system
    var geometry = new THREE.CylinderGeometry(radius, radius, height, 32);
    var material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      wireframe: true
    });
    var cylinder = new THREE.Mesh(geometry, material);

    // add the containment to the scene
    sceneObject.add(cylinder);
  };

  // creates the particle system
  self.createParticleSystem = function() {
    var color = d3.scale.linear()
      .domain([0, 0.1])
      .range(['#1b9e77', '#7570b3']);


    // the below range is pretty good as well
    // .range(['#1b9e77', '#d95f02', '#7570b3']);

    // use self.data to create the particle system
    console.log("the value of data = " + JSON.stringify(data[2]));
    var geometry = new THREE.Geometry();
    var dotMaterial = new THREE.PointsMaterial({
      size: 1,
      color: 0x39cc00,
      sizeAttenuation: false
    });

    for (var i = 0; i < particleCount; i++) {
      var vertex = new THREE.Vector3();
      vertex.x = data[i].X;
      vertex.y = data[i].Y;
      vertex.z = data[i].Z;

      geometry.vertices.push(vertex);
      if (data[i].Z >= zPos - 0.5 && data[i].Z <= zPos + 0.5) {
        geometry.colors.push(new THREE.Color(color(data[i].concentration)));
      } else {
        geometry.colors.push(new THREE.Color(0xffffff));
      }
    }
    var psMat = new THREE.PointCloudMaterial();
    psMat.vertexColors = true;
    psMat.size = 0.09;
    var ps = new THREE.PointCloud(geometry, psMat);
    ps.sizeAttenuation = true;

    sceneObject.add(ps);
  };

  self.create2DSlice = function() {
    x = d3.scale.linear()
      .domain([-5, 5])
      .range([0, width]);

    y = d3.scale.linear()
      .domain([0, 10])
      .range([height, 0]);

    chart.remove();

    chart = d3.select('.box2')
      .append('svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .attr('class', 'chart')

    main = chart.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'main')

    // draw the x axis again
    xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

    main.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .attr('class', 'main axis date')
      .call(xAxis);

    // draw the y axis
    yAxis = d3.svg.axis()
      .scale(y)
      .orient('left');

    main.append('g')
      .attr('transform', 'translate(0,0)')
      .attr('class', 'main axis date')
      .call(yAxis);

    g = main.append("g");

    let slice = data.filter(d => d.Z <= zPos + 0.5 && d.Z >= zPos - 0.5);
    console.log('num of particles = ' + slice.length);

    let dataBind = g.selectAll("circle").data(slice);

    // exit
    dataBind.exit().remove();

    // update
    g.selectAll("circle");

    //enter
    dataBind.enter().append("circle")
      .attr("r", 1)
      .attr("cx", function(d) {
        return x(d.X);
      })
      .attr("cy", function(d) {
        return y(d.Y);
      })
      .style("fill", function(d) {
        return color(d.concentration);
      });

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
        // create cylinder outline
        self.drawContainment();

        // create the particle system
        self.createParticleSystem();

        // create 2D view
        self.create2DSlice();

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
