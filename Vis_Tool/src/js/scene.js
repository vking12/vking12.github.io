"use strict";

/* Get or create the application global variable */
var App = App || {};

/* Create the scene class */
var Scene = function(options) {

  // setup the pointer to the scope 'this' variable
  var self = this;

  // scale the width and height to the screen size
  var width = d3.select('.particleDiv').node().clientWidth * 0.9;
  var height = width;

  var moveData = false;
  var moveV = false;

  // create the scene
  self.scene = new THREE.Scene();

  // setup the camera
  self.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
  self.camera.position.set(0, 0, 500);
  self.camera.lookAt(0, 50, 0);

  // Add a directional light to show off the objects
  var light = new THREE.DirectionalLight(0xffffff, 1.5);
  // Position the light out from the scene, pointing at the origin
  light.position.set(0, 2, 20);
  light.lookAt(0, 0, 0);

  // add the light to the camera and the camera to the scene
  self.camera.add(light);
  self.scene.add(self.camera);

  // create the renderer
  self.renderer = new THREE.WebGLRenderer();

  // set the size and append it to the document
  self.renderer.setSize(width, height);
  document.getElementById(options.container).appendChild(self.renderer.domElement);

  // set controls here
  var controls = new THREE.OrbitControls(self.camera, self.renderer.domElement);
  controls.addEventListener('change', self.render);
  controls.enableZoom = true;
  this.zoomSpeed = 1.0;

  this.enablePan = true;
  this.keyPanSpeed = 7.0;

  // Set to false to disable use of the keys
  this.enableKeys = true;

  // The four arrow keys
  this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  };

  // Mouse buttons
  this.mouseButtons = {
    ORBIT: THREE.MOUSE.LEFT,
    ZOOM: THREE.MOUSE.MIDDLE,
    PAN: THREE.MOUSE.RIGHT
  };

  /* add the checkboard floor to the scene */

  self.public = {

    resize: function() {

    },

    addObject: function(obj) {
      self.scene.add(obj);
    },

    render: function() {
      if (moveData === true) {
        var timer = new Date().getTime() * 0.0020;
        self.camera.position.x = Math.floor(Math.cos(timer) * 20);
        self.camera.position.z = Math.floor(Math.sin(timer) * 20);
      }
      // self.camera.position.x += (mouseX - self.camera.position.x) * 0.0005;
      //self.camera.position.y += (-mouseY - self.camera.position.y) * 0.005;
      self.camera.lookAt(self.scene.position);
      requestAnimationFrame(self.public.render);
      self.renderer.render(self.scene, self.camera);
  }

};

return self.public;
};
