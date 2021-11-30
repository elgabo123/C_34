class Ball{
    constructor(x,y,w,h,angle){
        var options={
            frictionAir:0.005,
            density:1
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("white");
        ellipse(0,0,this.w,this.h);
        pop();
    }
}