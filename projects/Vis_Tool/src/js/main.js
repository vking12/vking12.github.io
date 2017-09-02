"use strict";

/* Get or create the application global variable */
var App = App || {};

/* IIFE to initialize the main entry of the application*/
(function() {

    // setup the pointer to the scope 'this' variable
    var self = this;

    /* Entry point of the application */
    App.start = function()
    {
        // create a new scene
        App.scene = new Scene({container:"scene"});
        App.scene2 = new Scene({container:"scene2"});
        App.scene3 = new Scene({container:"scene3"});
        App.scene4 = new Scene({container:"scene4"});
        App.scene5 = new Scene({container:"scene5"});
        App.scene6 = new Scene({container:"scene6"});
        App.scene7 = new Scene({container:"scene7"});
        App.scene8 = new Scene({container:"scene8"});
        App.scene9 = new Scene({container:"scene9"});
        App.scene10 = new Scene({container:"scene10"});
        App.scene11 = new Scene({container:"scene11"});
        App.scene12 = new Scene({container:"scene12"});

        // initialize the particle system
        var particleSystem = new ParticleSystem();
        particleSystem.initialize('data/image01_2014_03_17.csv');

        var pSys2 = new ParticleSystem();
        pSys2.initialize('data/image02_2014_08_24.csv');

        var pSys3 = new ParticleSystem();
        pSys3.initialize('data/image03_2014_11_28.csv');

        var pSys4 = new ParticleSystem();
        pSys4.initialize('data/image04_2014_12_30.csv');

        var pSys5 = new ParticleSystem();
        pSys5.initialize('data/image05_2015_02_15.csv');

        var pSys6 = new ParticleSystem();
        pSys6.initialize('data/image06_2015_06_24.csv');

        var pSys7 = new ParticleSystem();
        pSys7.initialize('data/image07_2015_09_12.csv');

        var pSys8 = new ParticleSystem();
        pSys8.initialize('data/image08_2015_11_15.csv');

        var pSys9 = new ParticleSystem();
        pSys9.initialize('data/image09_2016_03_06.csv');

        var pSys10 = new ParticleSystem();
        pSys10.initialize('data/image10_2016_06_26.csv');

        var pSys11 = new ParticleSystem();
        pSys11.initialize('data/image11_2016_09_06.csv');

        var pSys12 = new ParticleSystem();
        pSys12.initialize('data/image12_2016_12_19.csv');

        //add the particle system to the scene
        App.scene.addObject( particleSystem.getParticleSystems());
        App.scene2.addObject( pSys2.getParticleSystems());
        App.scene3.addObject( pSys3.getParticleSystems());
        App.scene4.addObject( pSys4.getParticleSystems());
        App.scene5.addObject( pSys5.getParticleSystems());
        App.scene6.addObject( pSys6.getParticleSystems());
        App.scene7.addObject( pSys7.getParticleSystems());
        App.scene8.addObject( pSys8.getParticleSystems());
        App.scene9.addObject( pSys9.getParticleSystems());
        App.scene10.addObject( pSys10.getParticleSystems());
        App.scene11.addObject( pSys11.getParticleSystems());
        App.scene12.addObject( pSys12.getParticleSystems());

        // render the scene
        App.scene.render();
        App.scene2.render();
        App.scene3.render();
        App.scene4.render();
        App.scene5.render();
        App.scene6.render();
        App.scene7.render();
        App.scene8.render();
        App.scene9.render();
        App.scene10.render();
        App.scene11.render();
        App.scene12.render();
    };

}) ();
