"use strict"

const G = 66.74;

let width, height;

let sun;
let planets = [];

function setup() {
	width = canvas.width;
	height = canvas.height;

	sun = new Planet(width/2, height/2, 20);

	for(let i = 0; i < 50; i++)
		planets.push(new Planet(randomInt(0, width), randomInt(0, height), 1, true));
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );

	fill(new Color(255));
	sun.draw();

	for(let planet of planets) {
		let squareSunDist = (planet.position.x - sun.position.x)**2 + (planet.position.y - sun.position.y)**2;
		let gravity = Vector.substract(sun.position, planet.position);
		gravity.setMagnitude( G*planet.mass*sun.mass/squareSunDist );

		planet.applyForce( gravity );
		planet.update();
		planet.draw();
	}
}

