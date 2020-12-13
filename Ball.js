class Ball{
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        fill(255, 0, 255);
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}
/*class Ball{
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("polygon.png");
        this.body=Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }
    display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    fill(255, 0, 255);
    imageMode(CENTER)
    ellipseMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
    }
}*/