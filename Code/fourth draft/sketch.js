var song;
var video;
var button
var w = 800;
var h = 800;
var song;

function preload() {
  song = loadSound("test.mp3");  
}

function setup() {
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

function draw() {
  textAlign(CENTER);
  text("click to play/pause", width/2, height/2);
    video.loadPixels();
    if (video.pixels.length > 0) { 
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
   tint(200,200,100);
    image(video, 0, 0, w/2, h/2);
  tint(100,200,200);
  image(video, 400, 400, w/2, h/2);
  tint(200,100,200);
  image(video, 400, 0, w/2, h/2);
  tint(200,200,200);
  image(video, 0, 400, w/2, h/2);
}