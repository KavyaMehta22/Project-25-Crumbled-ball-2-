class paperBall{
    constructor() {
        var options={
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
    
        this.body=Bodies.circle(150,400,60,options);
        this.image=loadImage("paper.png");

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        //ellipseMode(CENTER);
        //ellipse(this.body.position.x,this.body.position.y,40);
        image(this.image,0,0,70,70);
        pop();
    }
}