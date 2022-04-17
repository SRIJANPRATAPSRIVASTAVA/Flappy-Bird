const obstaclesArray = [];
class obstacle{
    constructor(){
        this.top = Math.random()*canvas.height/3;
        this.bottom = Math.random()*canvas.height/3;
        this.x = canvas.width;
        this.width = 30;
        this.color = 'rgb(47, 57, 77)';
        this.counted = false;
    }
    draw(){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,0,this.width,this.top);
        ctx.fillRect(this.x,canvas.height-this.bottom,this.width,this.bottom);
    }
    update(){
        this.x -= gameSpeed;
        if(!this.counted && this.x<bird.x){
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles(){
    if(frame%80 === 0){
        obstaclesArray.unshift(new obstacle);
    }
    for(let i =0;i<obstaclesArray.length;i++){
        obstaclesArray[i].update();
    }
    if(obstaclesArray.length>20){
        obstaclesArray.pop(obstaclesArray[0])
    }
}