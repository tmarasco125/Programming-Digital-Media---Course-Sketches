var walker = [];
var count  = 0;

function setup() {
	createCanvas(640, 480);
	imageMode(CENTER);
	count = random(10,30);


	var i = 0;

	for (var j = 0; j < count / 3; j++) {
		walker[i++] = new Walker("SpelunkyGuy.png", random(0, 640), random(0, 480));
	}
	for (var j = 0; j < count / 3; j++) {
		walker[i++] = new Walker("Green.png", random(0, 640), random(0, 480));
	}
	for (var j = 0; j < count / 3; j++) {
		walker[i++] = new Walker("Cyan.png", random(0, 640), random(0, 480));
	}
}

function draw() {
	background(0, 127, 0);

	if (frameCount % 4 == 0)
	{
		for (var i = 0; i < count; i++) {
			walker[i].step();
		}
	}
	for (var i = 0; i < count; i++) {
		walker[i].draw();
	}
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		for (var i = 0; i < count; i++) {
			walker[i].move(+1);
		}
	}
	if (keyCode === LEFT_ARROW) {
		for (var i = 0; i < count; i++) {
			walker[i].move(-1);
		}
	}
}

function keyReleased() {
	if (keyCode === RIGHT_ARROW) {
		for (var i = 0; i < count; i++) {
			walker[i].move(-1);
		}
	}
	if (keyCode === LEFT_ARROW) {
		for (var i = 0; i < count; i++) {
			walker[i].move(+1);
		}
	}
}

function Walker(imageName, x, y) {
	this.image     = loadImage(imageName);
	this.moving    = 0;
	this.facing    = 1;
	this.frame     = 0;
	this.x         = x;
	this.y         = y;

	this.move = function(d) {
		this.moving = this.moving + d;

		if (this.moving)
			this.facing = this.moving;
	}

	this.step = function() {
		if (this.moving) {
			this.frame = (this.frame + 1) % 7;
			this.x = this.x + this.moving * 10;
		} else {
			this.frame = 0;
		}
	}

	this.draw = function() {
		push();
		translate(this.x, this.y);
		scale(this.facing, 1);

		if (this.moving) {
			if (this.frame == 0)
				image(this.image, 0, 0, 80, 80,  80, 0, 80, 80);
			if (this.frame == 1)
				image(this.image, 0, 0, 80, 80, 160, 0, 80, 80);
			if (this.frame == 2)
				image(this.image, 0, 0, 80, 80, 240, 0, 80, 80);
			if (this.frame == 3)
				image(this.image, 0, 0, 80, 80, 320, 0, 80, 80);
			if (this.frame == 4)
				image(this.image, 0, 0, 80, 80, 400, 0, 80, 80);
			if (this.frame == 5)
				image(this.image, 0, 0, 80, 80, 480, 0, 80, 80);
			if (this.frame == 6)
				image(this.image, 0, 0, 80, 80, 560, 0, 80, 80);
			if (this.frame == 7)
				image(this.image, 0, 0, 80, 80, 640, 0, 80, 80);
		} else {
			image(this.image, 0, 0, 80, 80, 0, 0, 80, 80);
		}

		pop();
	}
}