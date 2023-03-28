img = "";
status="";

function preload(){
	img = loadImage('dog_cat.jpg');
}

function setup(){
	canvas = createCanvas(640, 420);
	canvas.center();
	objectDetector=ml5.objectDetector('cocossd', modelloaded);
	document.getElementbyId("status").innerHTML="status: detecting objects";
}

function modelloaded(){
	console.log("Model has been loaded.");
	status=true;
	objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
	if(error){
		console.log(error);
	}
	else{
		console.log(results);
	}
}

function draw(){
	image(img, 0 , 0, 640, 420);
	fill("#FF0000");
	stroke("#FF0000");
	text("dog", 45, 75);
	noFill();
	rect(30, 60, 450, 350);

	fill("#0000FF");
	stroke("#0000FF");
	text("cat", 320, 120);
	noFill();
	rect(300, 90, 270, 320);
}