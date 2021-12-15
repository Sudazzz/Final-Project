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
//create array