const particles = [];
class particle{
    constructor(){
        this.x = bird.x+20;
        this.y = bird.y+20;
        this.size = Math.random()*7 +3;
        this.speedY = Math.random()-0.5;
        this.color = 'hsla('+hue+',100%,50%,0.8)';
    }
    update(){
        this.x -= gameSpeed;
        this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function handleParticle(){
    particles.unshift(new particle);
    for(i=0;i<particles.length;i++)
    {
        particles[i].update();
        particles[i].draw();
    }
    if(particles.length>200){
        for(let i=0;i<20;i++){
            particles.pop(particles[0]);
        }
    }
}