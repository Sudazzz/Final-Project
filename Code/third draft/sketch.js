let video;
let button;
let w = 800;
let h = 800;
let scenery = 1;
let seaImage;
let slider;

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
    canvas = createCanvas(w, h, WEBGL);
    canvas.id('p5canvas');
    video.id('p5video');
    //video.hide();
    slider = createSlider(0,1,0.5,0.01);
    slider.id('blur-slider')
  button = createButton('snap');
  button.mousePressed(takesnap);

let seriously = new Seriously();

  let src = seriously.source('#p5video');
 let target = seriously.target('#p5canvas');
 let blur = seriously.effect('blur')
 blur.amount = '#blur-slider';
 blur.source = src;
 target.source = blur;
  seriously.go();
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
  if (scenery>10){
    scenery = 1;   
}
}