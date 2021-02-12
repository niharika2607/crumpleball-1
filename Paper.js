class Paper
{
    constructor(x,y,r)
    {
        var options={
            density:1.2,
            isStatic:false,
            restitution:0.3,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);
    }
    display()
    {
        ellipseMode(RADIUS);
        fill("pink")
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}