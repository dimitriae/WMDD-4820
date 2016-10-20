var bug
var bug2
var bug3
var bug4

function setup() {
  createCanvas(800, 200)
  background(204)
  // Create object and pass in parameters
  bug = new JitterBug(width/2, height/2, 20)
  bug2 = new JitterBug(100, 100, 10, 'pink')
  bug3 = new JitterBug(100, 100, 30, 'random')
  bug4 = new JitterBug(100, 100, 20, 'blue')
}

function draw() {
  stroke(234, 134, 154)
  bug.move()
  bug.display()
  bug2.move()
  bug2.display()
  bug3.move()
  bug3.display()
  bug4.move()
  bug4.display()
}

function JitterBug(tempX, tempY, tempDiameter, color) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;
  this.color = color;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  this.display = function() {
  	if (this.color === 'pink'){
	  	stroke(238, 66, 244)
  	}
  	if (this.color === 'random'){
  		stroke(Math.random() * 255, Math.random() * 255, Math.random() * 255)
  		}
  	if (this.color === 'blue'){
  		stroke(66, 223, 244)
  	}
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}