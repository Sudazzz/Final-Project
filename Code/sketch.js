var video;
var button
var w = 800;
var h = 800;
var snapshots = [];

function setup() {
  createCanvas(w, h);
    video = createCapture(VIDEO, ready);
    video.size(w, h);
    //video.hide();
  //button=createButton('snap');
  //button.mousePressed(takesnap);
}

function draw() {
  snapshots.push(video.get());
  var a = 80;
  var b = 60;
  var x = 0;
  var y = 0;
  for(var i = 0; i < snapshots.length; i++){
  imgae(snapshots[i],x,y,a,b);
    x=x+a;
    if(x > width){
      x = 0;
      y = y + b;
    }
  }
  /*
  tint(200,200,100);
    image(video, 0, 0, w/2, h/2);
  tint(100,200,200);
  image(video, 400, 400, w/2, h/2);
  tint(200,100,200);
  image(video, 400, 0, w/2, h/2);
  tint(200,200,200);
  image(video, 0, 400, w/2, h/2);
    video.loadPixels();
    if (video.pixels.length > 0) { // don't forget this!
    }
    */
}

var go = false;

function ready(){
  go = true;
}

function takesnap(){
  if(go){
  snapshots.push(video.get());
  }
  /*
   tint(200,200,100);
    image(video, 0, 0, w/2, h/2);
  tint(100,200,200);
  image(video, 400, 400, w/2, h/2);
  tint(200,100,200);
  image(video, 400, 0, w/2, h/2);
  tint(200,200,200);
  image(video, 0, 400, w/2, h/2);
  */
}
