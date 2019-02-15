"use strict"

const G = 66.74;
	
let width, height;

let sun;
let planets = [];

function setup() {
	width = canvas.width;
	height = canvas.height;

	sun = new Planet(width/2, height/2, 20);

	for(let i = 0; i < 500; i++)
		planets.push(new Planet(randomInt(0, width), randomInt(0, height), random(1, 1.3), true));
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );

	fill(new Color(255));
	sun.draw();

	for(let planet of planets) {
		applyInteractions(planet);
		planet.update();
		planet.draw();
	}
}

function applyInteractions(planet) {
	applyGravity(planet, sun);
}

function applyGravity(planet, other) {
	let squareDist = (planet.position.x - other.position.x)**2 + (planet.position.y - other.position.y)**2;
	let force = Vector.substract(other.position, planet.position);

	force.setMagnitude( G*planet.mass*other.mass/squareDist );
	planet.applyForce( force );
}
