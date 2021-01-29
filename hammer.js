class Hammer{
    constructor(x,y,width,height,options){
        var options={
            density:5,
            friction:1.0,
            restitution:0.5

        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.x=x
        this.y=y
        World.add(world,this.body)
    }
    display(){
        this.body.position.x= mouseX;
        this.body.position.y= mouseY;
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("orange")
        rect(0,0,this.width,this.height)
        pop()
    }
}