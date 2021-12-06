let video;
let button;
let w = 800;
let h = 800;
let scenery = 1;
let seaImage;


function preload(){
  seaImage = loadImage('image1.jfif');
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
    //video.hide();
  button=createButton('snap');
  button.mousePressed(takesnap);
  
}

function draw() {
    video.loadPixels();
  
    if (video.pixels.length > 0) { 
    }
  
  if (scenery == 1){
    image(seaImage,0,0,100,100);
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


function keyIsPressed(){
  scenery++;
  if (scenery>10)
    scenery = 1;   
}

/*
function (){
  stuff++;
  if(stuff>10)
    stuff=1;
}
*/