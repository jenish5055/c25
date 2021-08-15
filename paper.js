class Paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
            restitution	:0.3,
            density :1.4,

			}
		this.r=radius*2+30
	    this.image=loadImage("paper.png")
		
		this.body=Bodies.circle(x, y,radius, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}