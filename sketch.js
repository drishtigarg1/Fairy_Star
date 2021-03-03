var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.x = star.position.x;
        star.y = star.position.y;
	console.log(star.position.x);
	console.log(star.position.y)

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	

}


function draw() {
  background(bgImg);
  Engine.update(engine);

  if(star.position.y > 470){
	fairy.x = 510;
	star.y = 480;
	 
  }
  
  fairy.velocityX = 0;
  
  drawSprites();

}

function keyPressed() {

if (keyCode === LEFT_ARROW) {
	fairy.velocityX = -25;
} 

if (keyCode === RIGHT_ARROW) {
	fairy.velocityX = 50;
}

if (keyCode === DOWN_ARROW) {
	star.velocityY = 10;
}


}
