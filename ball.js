class Ball {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
         // isStatic:true
          
    
      }
      this.body = Bodies.circle(x,y,r)
      this.r=r;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      //stroke("green");
      fill(255);
      ellipse(0, 0,this.r);
      pop();
    }
  }
