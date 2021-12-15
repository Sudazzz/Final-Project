let song;
let laugh;
let video;//create two variable to easily access and call them
let button;//press button
let w = 1000;
let h = 1000;//with and height
let Spopcorn;
let VIpopcorn;
let Vpopcorn;
let IIIpopcorn;
let IIpopcorn;
let Ipopcorn;
let slider;
let scary;
let crown;
let evil;
//popcorn list

function preload() {
  song = loadSound("cinematic.mp3");//upload creppy song
	laugh = loadSound("ScaryLaugh.mp3")
  //unpoad popcorn image
  one = loadImage("1.png");
  two = loadImage("2.png");
  three = loadImage("3.png");
  five = loadImage("5.png");
  six = loadImage("6.png");
  seven = loadImage("7.png");
  //upload rabbit image
  butter = loadImage("Butter.png");
	scary = loadImage("ScaryLaugh.jpg");
	crown = loadImage("Crown.jpg");
	evil = loadSound("EvilLaugh.mp3");
}

function setup() {
  //if camera is ready or not
	slider=createSlider(0,1,0.5,0.01);
  console.log(
    "move mouse to spray snow, click mouse to play or stop music, click snap button to take picture, then wait see what happen."
  );
  //sue camera
  video = createCapture(
    {
      audio: false,
      video: {
        width: w,
        height: h,
      },
    },
    function () {
      console.log("capture ready.");
    }
  );
  video.elt.setAttribute("playsinline", "");
  video.size(w, h);
  createCanvas(w, h);
  background(0);
  video.hide();//use this to hide camera
  //call button
	//change input style works the same as changing button style
  button = createButton("snap");
  button.size(100, 100);
  button.mousePressed(takesnap);//call takesnap function
  //call popcorn
  Spopcorn = new Popcorn(150, 800, 0, -10);//pass value, show the process form corn to popcorn;
  VIpopcorn = new Popcorn(350, 800, 0, -10);
  Vpopcorn = new Popcorn(560, 800, 0, -10);
  IIIpopcorn = new Popcorn(750, 100, 0, 10);
  IIpopcorn = new Popcorn(560, 100, 0, 10);
  Ipopcorn = new Popcorn(350, 100, 0, 10);
}

function draw() {
  frameRate(13);
  fill(0);
  square(100, 100, 800);//cover the black background
  for (let col = 100; col < 900; col += 20) {
    for (let row = 100; row < 900; row += 20) {
      stroke(random(0, 255));//make both point and text stroke flick
      strokeWeight(2);
      smooth();
      point(col, row);//create 90' TV screen noise;
    }
  }
song.setVolume(slider.value());
	song.rate(random(0.5,2));
  textAlign(CENTER);
  fill(255);
  textSize(20);
  textFont("Gerogia");
  text("click to play/pause", width / 9, height / 40);//add instruction
  textSize(50);
  textFont("Chiller");//choose a creepy font
  fill(255, 0, 0);//blood red
  if (millis() < 8000) {
    text('"How to make popcorn?" You ask me.', 600, 200);
		image(video, 700, 700, 200, 200);
  image(video, 500, 500, 200, 200);
  image(video, 300, 300, 200, 200);
  image(video, 100, 100, 200, 200);
    image(butter, 720, 565, 150, 150);
  } else if (millis() < 16000) {
    text("'Mix red snow, rabbits and yourself.'", 400, 800);
		image(video, 700, 700, 200, 200);
    image(video, 500, 500, 200, 200);
    image(video, 300, 300, 200, 200);
    image(video, 100, 100, 200, 200);
    image(butter, 530, 360, 150, 150);
  } else if (millis() < 24000) {
    text("'Burn it with creepy piano music!'", 400, 800);
		image(butter,320, 165, 150, 150);
    image(video, 700, 700, 200, 200);
    image(video, 500, 500, 200, 200);
    image(video, 300, 300, 200, 200);
    image(video, 100, 100, 200, 200);
  } else if (millis() < 28000) {
		image(video, 700, 700, 200, 200);
    image(video, 500, 500, 200, 200);
    image(video, 300, 300, 200, 200);
    image(video, 100, 100, 200, 200);
		text("'Enjoy your popcorn'", 600, 200);
	}
		else if (millis() < 30000) {
		laugh.play();
		background(0);
		image(scary,100,100,800,800);
  }
	else if (millis() < 32000) {
		evil.play();
		background(0);
		image(crown,100,100,800,800);
  }
	  else{
		textSize(400);
		text("END!!!", 600,500);
			}
//make rabbit and text come and disappear at specific time period
  video.loadPixels();
  if (video.pixels.length > 0) {
  }//make sure pixels make a image
	//make four video frames
  //construct a new instance of a particle object and feed it to the mouse.
  particles.push(new Particle(mouseX,mouseY));
  for (let i = 0; i < particles.length; i++) {
    //check on object's age - if older than some number - remove it.
    if (particles[i].diameter < 2) {
      particles.splice(i, 1);
      // memory management 
			//splice is super important.
      //if you are constantly adding to the world you need to remove,
      //bc otherwise the computer will get slow.
    }
    particles[i].update();
    particles[i].display();
		//use this to create red snow
  }

  Spopcorn.update(800, 310);
  Spopcorn.display(seven);
  VIpopcorn.update(800, 500);
  VIpopcorn.display(six);
  Vpopcorn.update(800, 695);
  Vpopcorn.display(five);
  IIIpopcorn.update(630, 100);
  IIIpopcorn.display(three);
  IIpopcorn.update(420, 100);
  IIpopcorn.display(two);
  Ipopcorn.update(230, 100);
  Ipopcorn.display(one);
	//make different popcorns;
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }//start and stop music by pressing mouse
}

function takesnap() {
  console.log("take pic");
  for (i = 0; i < 1000; i = i + 100) {
    image(video, i, 0, 100, 100);
    image(video, i, 900, 100, 100);
    image(video, 0, i, 100, 100);
    image(video, 900, i, 100, 100);
		//take pictures of yourself or other people
  }
}