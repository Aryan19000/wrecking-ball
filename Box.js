class Box{
    constructor(x, y){
        var options={
            isStatic:false,
            restition:0.8,
            friction:1.0,
            density:0.05
        }
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=50;
        this.body=Bodies.rectangle(x, y, 50, 50);
        World.add(world, this.body);
    }
    display(){
        fill("white");
        stroke("black");
        strokeWeight(4);
        push();
        rotate(this.body.angle)
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, 50, 50);
        pop();
    }
}