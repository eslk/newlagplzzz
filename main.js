img = "";
status1 = "";
objects = [];

function draw(){
    image(img, 0, 0, 640, 420);

    if(status1 != "")
     {
         r = random(255);
         g = random(255);
         b = random(255);
        objectDetector.detect(img, gotResult);
    
      for (i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "status: Object Detcted";
        document.getElementById("How").innerHTML = "number of Objects that are detected are:" + objects.length;

        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        Text(objects[i].label + "" + percent + "%", objects[i].x +15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
     }
   

    
   }

function preload(){
    img = loadImage("download.jpeg");
}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status : DETECTING OBJECT";
}


function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    else{
    console.log(results);
    objects = results;
}

}