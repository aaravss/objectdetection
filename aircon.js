status = "";
img = "";

function preload(){
    img = loadImage("aircon.jpg");
}

function setup(){
    canvas = createCanvas(700,500);
    canvas.center();
    cocossd = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById('status').innerHTML = 'Status: detecting objects...';
}

function modelLoaded(){
    console.log('Model Loaded!');
status = true;
cocossd.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
      console.log(error);
    }
    console.log(results);
  }
