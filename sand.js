class Sand{
    constructor(x,y,diameter){
        var options={
            restitution:0.5,
            friction:1,
            density:1
        }
        this.body=Bodies.circle(x,y,diameter,options)
        this.diameter=diameter
        this.x=x
        this.y=y
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("yellow")
        strokeWeight(2)
        stroke("black")
        ellipse(0,0,this.diameter)
        pop()
    }
    
}