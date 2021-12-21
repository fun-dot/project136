video="";
status="";
function preload(){
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function start(){
    objectdetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    video.speed(1);
    video.loop();
    video.volume(0);
}
function draw(){
    image(video,0,0,480,380);
}