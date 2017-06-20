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

    self.createParticleSystem = function() {
    // use self.data to create the particle system
    console.log("the value of data = " + JSON.stringify(data[2]));
    var geometry = new THREE.Geometry();
    var dotMaterial = new THREE.PointsMaterial({
      size: 1,
      color: 0x39cc00,
      sizeAttenuation: false
    });

    for (var i = 0; i < data.length; i++) {
      var vertex = new THREE.Vector3();
      // small offset added so the image appears on the center of the screen 350 200
      vertex.x = data[i].X - 325;
      vertex.y = data[i].Y - 310;

      geometry.vertices.push(vertex);
      var infoRGB = 'rgb(' + data[i].R + ',' + data[i].G + ',' + data[i].B + ')';
      //alert(infoRGB);
      geometry.colors.push(new THREE.Color(infoRGB));
    }

    var psMat = new THREE.PointCloudMaterial();
    psMat.vertexColors = true;
    psMat.size = 3;
    var ps = new THREE.PointCloud(geometry, psMat);
    ps.sizeAttenuation = true;

    sceneObject.add(ps);

    };

    // data loading function
    self.loadData = function(file){

        // read the csv file
        d3.csv(file)
        // iterate over the rows of the csv file
            .row(function(d) {

                // get the min bounds
                bounds.minX = Math.min(bounds.minX || Infinity, d.X);
                bounds.minY = Math.min(bounds.minY || Infinity, d.Y);

                // get the max bounds
                bounds.maxX = Math.max(bounds.maxX || -Infinity, d.X);
                bounds.maxY = Math.max(bounds.maxY || -Infinity, d.Y);

                // add the element to the data collection
                data.push({
                    // Position
                    X: Number(d.X),
                    Y: Number(d.Y),
                    // RGB stored somewhere
                    R: Number(d.B3),
                    G: Number(d.B2),
                    B: Number(d.B1)
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
        initialize: function(file){
            self.loadData(file);
        },

        // accessor for the particle system
        getParticleSystems : function() {
            return sceneObject;
        }
    };

    return publiclyAvailable;

};
