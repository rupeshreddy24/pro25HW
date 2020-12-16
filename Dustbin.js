class Dusbin
{
    constructor(x,y,width,height,angle)
    {
        var options={
            isStatic: true 
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        this.scale = 0.1;

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
        this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});




        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
        World.add(binb,this.bottomBody);
        World.add(binb,this.leftWallBody);
        World.add(binb,this.rightWallBody);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
       
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        

        
        
        fill("red");
        

        rect(0,0,this.width,this.height);

        pop();


        push();

        imageMode(CENTER);
        image(this.image,692,480);
        


        pop();
    }

}