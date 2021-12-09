var song;
var video;
var button
var w = 1000;
var h = 1000;
var song;

function preload() {
  song = loadSound("cinematic.mp3");  
  
}

function setup(a,b) { 
  video = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    video.elt.setAttribute('playsinline', '');
    video.size(w, h);
    createCanvas(w, h);
    video.hide();
  button=createButton('snap');
  button.mousePressed(takesnap);
}

function draw(a,b) {
  textAlign(CENTER);
  textSize(20);
  text("click to play/pause", width/9, height/40);
    video.loadPixels();
    if (video.pixels.length > 0) { 
    }

  image(video, 700, 700, 200, 50);
  image(video, 500, 500, 150, 100);
  image(video, 300, 300, 100, 150);
  image(video, 100, 100, 50, 200);
  
  if(a>0){
    a=-100;
  }
  
   if(a<0){
    a=100;
  }
  
  if(b>0){
    b=-100;
  }
  
  if(b<0){
    b=100;
  } 
 
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

function takesnap(){
  for(i=0; i<1000; i=i+50){
    image(video, i, 0, 50, 50);
    image(video, i, 950, 50, 50);
  }
}
