class paper {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        world = Engine.create().world;
        this.body = Bodies.circle(this.x, this.y,this.r/2, options);
        World.add(world, this.body);
    }
    display() {
        var paperPos = this.body.position;
        push()
        translate(paperPos.x, paperPos.y);
         imageMode(CENTER)

        image(this.image, 0, this.r,50,50)
	    
        pop()

    }

}