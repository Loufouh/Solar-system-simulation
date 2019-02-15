"use strict";

class Planet {
	constructor(x, y, mass, applyVelocity=false) {
		this.position = new Vector(x, y);
		this.mass = mass;
		
		if(applyVelocity) {
			let angle = Vector.substract(sun.position, this.position).getAngle() + Math.PI/2;
			let speed = 2;
			
			this.velocity = new Vector(speed*Math.cos(angle), speed*Math.sin(angle));
		} else {
			this.velocity = new Vector(random(-2, 2), random(-2, 2));
		}

		this.acceleration = new Vector();
	}

	applyForce(force) {
		this.acceleration.add(force);
	}

	update() {
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);

		this.acceleration.multiply(0);
	}

	draw() {
		fill(new Color(255/2*this.mass, 255/2*this.mass, 255/this.mass));

		circle(this.position.x, this.position.y, this.mass*5);
	}
}

