status = "";
img = "";
objects = [];

function preload(){
    img = loadImage("pillow.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    cocossd = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById('status').innerHTML = 'Status: detecting objects...';
}



function modelLoaded(){
    console.log('Model Loaded!');
status = true;
cocossd.detect(canvas,gotResults);
}

function gotResults(error,results){
    if(error){
      console.log(error);
    }
    console.log(results);
    objects = results;
  }

  function draw(){
    image(img,0,0,640,420);
    if(status != false){
 for(i = 0; i<objects.length; i++){
    fill('#FF0000');
  percent = floor(objects[i].confidence*100);
  text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15);
  noFill();
  stroke('#FF0000');
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
document.getElementById("status").innerHTML = "Status: object(s) detected";
document.getElementById("detected").innerHTML = "There is one object in the image from which CocoSSD has detected one."
    }
  }}