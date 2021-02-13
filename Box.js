class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        this.image = loadImage("box.png");
        World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       if(this.body.speed < 5) {
          push();
          angleMode(RADIANS);
          translate(pos.x,pos.y);
          rotate(this.body.angle);
          imageMode(CENTER);
          image(this.image,0,0,this.width,this.height);
          pop();
       }
       else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 10;
       tint(255,this.Visiblity);
       image(this.image,this.body.position.x,this.body.position.y,20,30);
       pop();
       }
    }
}