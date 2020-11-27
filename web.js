class Web{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB, 
            stiffness:0.04

        }
        this.pointB = pointB
        this.web = Constraint.create(options)
        World.add(world,this.web)
    }
    display(){
        var pointA = this.web.bodyA.position
        var pointB = this.pointB
        stroke ("white")
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}