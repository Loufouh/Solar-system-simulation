"use strict";

let canvas;
let fpsContainer;

window.onload = function () {
	canvas = document.querySelector("canvas");
	setTargetContext(canvas.getContext("2d"));
	
	fpsContainer = document.getElementById("fpsContainer");

	start();
}

