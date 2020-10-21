class dustbin{
    constructor(x,y,width,height) {
        var options={
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.angle=this.body.angle;

        World.add(world,this.body);
    }
    
    display() {
        var pos = this.body.position ;
        rectMode(CENTER);
        push();
        rotate(this.angle);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
    
}