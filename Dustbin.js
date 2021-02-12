class Dustbin
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true
        }
        this.dust=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.dust);
    }
    display()
    {
        fill("white");
        rectMode(CENTER)
        rect(this.dust.position.x,this.dust.position.y,this.w,this.h);

    }
}