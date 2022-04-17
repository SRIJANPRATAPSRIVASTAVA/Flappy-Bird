const one = new Image();
one.src = "frame-1.png";
const two = new Image();
two.src = "frame-2.png";
const three = new Image();
three.src = "frame-3.png";
const four = new Image();
four.src = "frame-4.png";

const frames = [one,two,three,four];

class Bird {    
  constructor() {
    this.x = 100;
    this.y = 200;
    this.vy = 20;
    this.width = 20;
    this.height = 20;
    this.weight = 1;
  }
  update() {
    let curve = Math.sin(angle)*15;
    if (this.y > canvas.height - (this.height*6)+curve) {
      this.y = canvas.height - (this.height*6)+curve; 
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.y += this.vy;
    }            
    if(this.y<0+this.height){
      this.y = this.height;
      this.vy = 0;
    }             
    if(spacePressed && this.y>this.height*3){                              
      this.flap();
    }
  }
  draw() {
    ctx.fillStyle = "red";
    // ctx.fillRect(this.x, this.y, this.height, this.width*3, this.height*3);
    for(let i=0;i<4;i++){
      ctx.drawImage(frames[i],this.x,this.y,this.width*3,this.height*3);
    }
  }
  flap() {
    this.vy -= 3;
  }
}

const bird = new Bird();
