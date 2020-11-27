class Block{
    constructor(x,y){
       this.body = createSprite(x,y,10,10)
       this.body.velocityX = -4
    }
    display(){
     this.body.shapeColor = "red"   
    }
}