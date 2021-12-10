let song;
let video;
let button
let w = 1000;
let h = 1000;

class Particle
{ 
	constructor(_x,_y)
	{
		this.x = _x;
		this.y = _y;
		this.nx = 0;
		this.ny = 0;
		this.xSpeed= 0;
		this.ySpeed= 0;
		this.freq= 0.02;
		this.diameter = random(50,80);
		this.age = 0; 
		
	}//end of constructor function
	
	update()
	{
		this.age++; // age our particle over time. 
      if(this.age>100){
        this.age=0;
      }
      if(this.diameter<15){
        this.diameter=15;
      }
		//lets decrease our diameter over time. 
		this.diameter*=0.99;
		//change our speed via noise
		//our position is x and y, they become our seeds becasue we are thinking sbout position of the object. 
		this.nx = noise(this.x*this.freq,this.y*this.freq);
		this.nx= map(this.nx,0,1,-1,1); 
		this.ny= map(this.ny,0,1,-1,1);
		this.ny = noise(this.x*this.freq,this.y*this.freq+244);
		this.xSpeed= this.nx;
		this.ySpeed =this.ny;
		this.xSpeed*= 0.9;
		this.ySpeed*=0.9;
		//update our position by speed
		this.x+= this.xSpeed;
		this.y+= this.ySpeed;
		
		if (this.x > width)
		{
			this.x=0;
		}
		if (this.x < 0)
		{
			this.x = width;
		}
		if(this.y > height)
		{
			this.y=0;
		}
		if(this.y < 0)
		{
			this.y=height;
		}
	}
	display()
	{
		push();
      noStroke();
		fill(250,random(0,10),0,random(40,80));
		translate(this.x,this.y);
		ellipse(0,0,this.diameter,this.diameter);
		pop();
	}	
}
//END of class definition

let particles = [];

function preload() {
  song = loadSound("cinematic.mp3");  
  one = loadImage("1.png");
  two = loadImage("2.png");
  three = loadImage("3.png");
  four = loadImage("4.png");
  five = loadImage("5.png");
  six = loadImage("6.png");
  seven = loadImage("7.png");
  rabbit = loadImage("Rabbit.png");
}

function setup() { 
   console.log('press mouse to spray snow and play or stop music, click snap to take picture.')
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
  background(0);
    video.hide();
  button=createButton('snap');
  button.mousePressed(takesnap);
}

function draw() {
  frameRate(13);
  fill(0);
  
  square(50,50,900);
  
  for (let col = 50; col < 950; col += 20) {
    for (let row = 50; row < 950; row += 20) {
      stroke (random(0, 255));
      strokeWeight (2);
      smooth();
      point (col, row);
    }
  }
  
  bounce();
  textAlign(CENTER);
  fill(255);
  textSize(20);
  textFont('Gerogia');
  text("click to play/pause", width/9, height/40);
  textSize(60);
  textFont('Chiller');
  fill(255,0,0);
	if (millis()<8000) {

      noStroke();
		text('"How to make popcorn?" You ask me.', 500,200);
        image(rabbit,710,510,200,200);
	}
	else if (millis()<16000) {
		text('I always said: Mix red snow, rabbits and yourself.', 500, 850);
      image(rabbit,480,330,200,200);
	}
	else if (millis()<24000) {
		text('Final step! Burn it with creepy piano music!', 555, 120);
      image(rabbit,255,160,200,200);
	}
    else if (millis()<32000) {
		text('Enjoy your popcorn with a scary movie night!', 480, 850);
      image(rabbit,43,20,200,200);
	}
  
    video.loadPixels();
    if (video.pixels.length > 0) { 
    }

  image(video, 700, 700, 200, 50);
  image(video, 500, 500, 150, 100);
  image(video, 300, 300, 100, 150);
  image(video, 100, 100, 50, 200);
  
  //construct a new instance of a particle object and feed it to the mouse. 
//particles.push(new Particle(mouseX,mouseY));
 for(let i = 0; i < particles.length; i++)
	{
		//check on object's age - if older than some number - remove it. 
		if(particles[i].diameter <2)
		{
			particles.splice(i,1); 
			// memory management //splice is super important. 
			//if you are constantly adding to the world you need to remove,
			//bc otherwise the computer will get slow. 
		}
		particles[i].update();
		particles[i].display();
	}
}

function mousePressed () {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

function takesnap(){
 console.log('take pic');
  for(i=0; i<1000; i=i+50){
    image(video, i, 0, 50, 50);
    image(video, i, 950, 50, 50);
    image(video, 0, i, 50, 50);
    image(video, 950, i, 50, 50);
  }
}

function mouseDragged()
{
	particles.push(new Particle(mouseX,mouseY));
}

function bounce(a){

}