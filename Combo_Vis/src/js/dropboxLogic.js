function dLogic() {
  var framesLeft = 2;

  var m14 = document.getElementById("Mar14_1").selected;
  var a14 = document.getElementById("Aug14_1").selected;
  var n14 = document.getElementById("Nov14_1").selected;
  var d14 = document.getElementById("Dec14_1").selected;
  var f15 = document.getElementById("Feb15_1").selected;
  var j15 = document.getElementById("Jun15_1").selected;
  var s15 = document.getElementById("Sep15_1").selected;
  var n15 = document.getElementById("Nov15_1").selected;
  var m16 = document.getElementById("Mar16_1").selected;
  var j16 = document.getElementById("Jun16_1").selected;
  var s16 = document.getElementById("Sep16_1").selected;
  var d16 = document.getElementById("Dec16_1").selected;

  var m14_2 = document.getElementById("Mar14_2").selected;
  var a14_2 = document.getElementById("Aug14_2").selected;
  var n14_2 = document.getElementById("Nov14_2").selected;
  var d14_2 = document.getElementById("Dec14_2").selected;
  var f15_2 = document.getElementById("Feb15_2").selected;
  var j15_2 = document.getElementById("Jun15_2").selected;
  var s15_2 = document.getElementById("Sep15_2").selected;
  var n15_2 = document.getElementById("Nov15_2").selected;
  var m16_2 = document.getElementById("Mar16_2").selected;
  var j16_2 = document.getElementById("Jun16_2").selected;
  var s16_2 = document.getElementById("Sep16_2").selected;
  var d16_2 = document.getElementById("Dec16_2").selected;

  var rgb = document.getElementById("RGB").selected;
  var plantH = document.getElementById("PlantHealth").selected;
  var floodB = document.getElementById("FloodBurn").selected;
  var sic = document.getElementById("SnowIceClouds").selected;


  var vImage;

  if (rgb === true){
    vImage = 'rgb';
  } else if (plantH === true){
    vImage = 'plantH';
  } else if (floodB === true){
    vImage = 'floodB';
  } else if (sic === true) {
    vImage = 'sic';
  }

  var img = [new imgSystem(), new imgSystem(), new imgSystem(), new imgSystem(), new imgSystem()];
  var wCanvas = ["img2", "img1"];
  var desc = ["txt2", "txt1"];

  var canvas, ctx;

  // clear old canvas
  for (var i = 0; i < wCanvas.length; i++){
    canvas = document.getElementById(wCanvas[i]);
    ctx = canvas.getContext('2d');
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById(desc[i]).innerHTML = "";
    canvas.style.visibility = 'hidden';
  }
  canvas=document.getElementById('img3');
  ctx = canvas.getContext('2d');
  document.getElementById('txt3').innerHTML = "";
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  while (framesLeft != 0) {
    if (m14) {
      img[framesLeft-1].initialize('data/image01_2014_03_17.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Mar 17th, 2014</kbd>";
      m14 = false;
    } else if (a14) {
      img[framesLeft-1].initialize('data/image02_2014_08_24.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Aug 24th, 2014</kbd>";
      a14 = false;
    } else if (n14) {
      img[framesLeft-1].initialize('data/image03_2014_11_28.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Nov 28th, 2014</kbd>";
      n14 = false;
    } else if (d14) {
      img[framesLeft-1].initialize('data/image04_2014_12_30.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Dec 30th, 2014</kbd>";
      d14 = false;
    } else if (f15) {
      img[framesLeft-1].initialize('data/image05_2015_02_15.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Feb 15th, 2015</kbd>";
      f15 = false;
    } else if (j15) {
      img[framesLeft-1].initialize('data/image06_2015_06_24.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Jun 24th, 2015</kbd>";
      j15 = false;
    } else if (s15) {
      img[framesLeft-1].initialize('data/image07_2015_09_12.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Sep 12th, 2015</kbd>";
      s15 = false;
    } else if (n15) {
      img[framesLeft-1].initialize('data/image08_2015_11_15.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Nov 15th, 2015</kbd>";
      n15 = false;
    } else if (m16) {
      img[framesLeft-1].initialize('data/image09_2016_03_06.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Mar 6th, 2016</kbd>";
      m16 = false;
    } else if (j16) {
      img[framesLeft-1].initialize('data/image10_2016_06_26.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Jun 26th, 2016</kbd>";
      j16 = false;
    } else if (s16) {
      img[framesLeft-1].initialize('data/image11_2016_09_06.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Sep 6th, 2016</kbd>";
      s16 = false;
    } else if (d16) {
      img[framesLeft-1].initialize('data/image12_2016_12_19.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Dec 19th, 2016</kbd>";
      d16 = false;
    } else if (m14_2) {
      img[framesLeft-1].initialize('data/image01_2014_03_17.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Mar 17th, 2014</kbd>";
      m14 = false;
    } else if (a14_2) {
      img[framesLeft-1].initialize('data/image02_2014_08_24.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Aug 24th, 2014</kbd>";
      a14 = false;
    } else if (n14_2) {
      img[framesLeft-1].initialize('data/image03_2014_11_28.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Nov 28th, 2014</kbd>";
      n14 = false;
    } else if (d14_2) {
      img[framesLeft-1].initialize('data/image04_2014_12_30.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Dec 30th, 2014</kbd>";
      d14 = false;
    } else if (f15_2) {
      img[framesLeft-1].initialize('data/image05_2015_02_15.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Feb 15th, 2015</kbd>";
      f15 = false;
    } else if (j15_2) {
      img[framesLeft-1].initialize('data/image06_2015_06_24.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Jun 24th, 2015</kbd>";
      j15 = false;
    } else if (s15_2) {
      img[framesLeft-1].initialize('data/image07_2015_09_12.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Sep 12th, 2015</kbd>";
      s15 = false;
    } else if (n15_2) {
      img[framesLeft-1].initialize('data/image08_2015_11_15.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Nov 15th, 2015</kbd>";
      n15 = false;
    } else if (m16_2) {
      img[framesLeft-1].initialize('data/image09_2016_03_06.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Mar 6th, 2016</kbd>";
      m16 = false;
    } else if (j16_2) {
      img[framesLeft-1].initialize('data/image10_2016_06_26.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Jun 26th, 2016</kbd>";
      j16 = false;
    } else if (s16_2) {
      img[framesLeft-1].initialize('data/image11_2016_09_06.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Sep 6th, 2016</kbd>";
      s16 = false;
    } else if (d16_2) {
      img[framesLeft-1].initialize('data/image12_2016_12_19.csv',  wCanvas[framesLeft-1], vImage);
      document.getElementById(desc[framesLeft-1]).innerHTML = "<kbd>Dec 19th, 2016</kbd>";
      d16 = false;
    } else {
      break;
    }
    framesLeft--;
  }

}
