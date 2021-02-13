class Ball{
    constructor(){
    var options= {
        isStatic:false,
        restitution:0.5,
        friction:0.0,
        density:1.2
    }
    this.body = Bodies.circle(450,250,40,options);
    World.add(world,this.body);
    }
    display(){
        push();
        fill("red");
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        ellipseMode(CENTER);
        ellipse(0,0,40,40);
        pop();
    }
}