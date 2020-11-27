const Body = Matter.Body
const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies 
const Constraint = Matter.Constraint    
var engine,world
var canvas
var spiderMan,spiderManSprite,spiderManImage 
var blocks = []
function preload(){
spiderManImage = loadAnimation("Images/player/0_Warrior_Run_000.png","Images/player/0_Warrior_Run_001.png","Images/player/0_Warrior_Run_002.png","Images/player/0_Warrior_Run_003.png","Images/player/0_Warrior_Run_004.png",
"Images/player/0_Warrior_Run_005.png","Images/player/0_Warrior_Run_006.png","Images/player/0_Warrior_Run_007.png","Images/player/0_Warrior_Run_008.png","Images/player/0_Warrior_Run_009.png",
"Images/player/0_Warrior_Run_010.png","Images/player/0_Warrior_Run_011.png","Images/player/0_Warrior_Run_012.png","Images/player/0_Warrior_Run_013.png","Images/player/0_Warrior_Run_014.png")
}
function setup(){
engine = Engine.create()
world = engine.world
canvas = createCanvas(1600,600)
spiderMan = Bodies.rectangle(50,550,10,10,{isStatic:false})
World.add(world,spiderMan)
spiderManSprite = createSprite(50,380,10,10)
spiderManSprite.addAnimation("run",spiderManImage)
spiderManSprite.scale = 0.1;
ground = new Ground(800,height,1600,20)
//spiderMan.velocityX = 3;

}
function draw(){
    background(0);
    spiderManSprite.x = spiderMan.position.x
    spiderManSprite.y = spiderMan.position.y
    if(frameCount%80 === 0){
        
        blocks.push(new Block(1600,Math.round(random(100,200))))
        
    }
    for(var j = 0;j < blocks.length;j++){
        blocks[j].display()
        
        
    }
    ground.display();
    drawSprites();
}
function keyPressed(){
    if(keyCode === 32){
        web1 = new Web(this.spiderMan,{x:blocks[0].x,y:blocks[0].y} )
        web1.display()
    }
}

