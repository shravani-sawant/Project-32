class Box1{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        fill("#7CBFB6");
        rect(pos.x, pos.y, this.width, this. height);
        pop();
    }
    
    
    
}