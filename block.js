class Block{
    constructor(x,y){
        var options = {
            isStatic : true
            
        }
        this.body = Bodies.rectangle (x,y,50,50,options)
        this.width = 50
        this.height = 50
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position 
        push()
        fill("red")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}