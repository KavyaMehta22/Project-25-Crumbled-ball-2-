
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var bin1,bin2,bin3,binImg;
var backgroundIMG;

function preload() {
	binImg = loadImage("dustbingreen.png");
	backgroundIMG = loadImage("backgroundIMG(1).jpg");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball = new paperBall();

	ground = Bodies.rectangle(width/2,600,800,20,{isStatic: true});
	World.add(world,ground);

	bin1 = new dustbin(660,580,150,20);
	bin2 = new dustbin(575,520,20,140);
	bin3 = new dustbin(745,520,20,140);

	Engine.run(engine);
	//console.log(ball);

	//console.log(ball.body.position);
}


function draw() {
	rectMode(CENTER);
	background(backgroundIMG);
	background.scale = 2.5;

	ball.display();
	
	fill(255);
	rect(ground.position.x,ground.position.y,800,20);

	//bin1.display();
	//bin2.display();
	//bin3.display();

	imageMode(CENTER);
	image(binImg,665	,520,160,144);

	drawSprites();

	//fill("black");
	//text(mouseX+","+mouseY,200,200);

	if((ball.body.position.x>630) && ball.body.position.y>490) {
		textSize(30);
		fill("pink");
		textStyle(BOLD);

		text("YAY! Now you know how to keep your school clean!",50,350);
	}

	if(keyDown(UP_ARROW) && ball.body.position.y>530) {
		Body.applyForce(ball.body,ball.body.position,{x:520,y:-540})
	}

	Engine.update(engine);
}

