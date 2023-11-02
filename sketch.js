let hawaii_img;
let dino1_img;
let dino2_img;
let dino3_img;
let dino4_img;
let dino5_img;
let dino6_img;
let dino7_img;
let dino8_img;
let dino9_img;
let dino10_img;

function preload() {
	hawaii_img = loadImage('hawaii.png');
	dino1_img = loadImage('allosaurus.png');
	dino2_img = loadImage('brontosaurus.png');
	dino3_img = loadImage('diplodocus.png');
	dino4_img = loadImage('plesiosaurus.png');
	dino5_img = loadImage('pterodactyl.png');
	dino6_img = loadImage('spinosaurus.png');
	dino7_img = loadImage('stegosaurus.png');
	dino8_img = loadImage('t-rex.png');
	dino9_img = loadImage('triceratops.png');
	dino10_img = loadImage('velociraptor.png');
}


function setup() {
	createCanvas(750, 800);
}

function draw() {
	background(0);
	image(hawaii_img, 0, 0, width, height);

	image(dino1_img, 20, 420, 220, 230);
	image(dino2_img, 360, 380, 240, 240);
	image(dino3_img, 160, 380, 220, 210);
	  image(dino4_img, 100, 580, 240, 240);

	 image(dino5_img, 100, 20, 200, 200);

	 image(dino6_img, 20, 20, 200, 200);

	 image(dino7_img, 300, 450, 200, 200);

	 image(dino8_img, 500, 350, 200, 200);

	 image(dino9_img, 500, 100, 200, 200);

	 image(dino10_img, 250, 100, 200, 200);





}
