const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let H = canvas.height;
let W = canvas.width;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let spacePressed = false;
let gameSpeed = 2;

let height = H - 90;

const backGround = new Image();
backGround.src = "BG.png";
const BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};
function handleBg() {
  if (BG.x1 <= -BG.width) {
    BG.x1 = BG.width-2;
  } else {
    BG.x1 -= gameSpeed;
  }
  if (BG.x2 <= -BG.width) {
    BG.x2 = BG.width-2;
  } else {   
    BG.x2 -= gameSpeed;
  }
  ctx.drawImage(backGround, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(backGround, BG.x2, BG.y, BG.width, BG.height);
}

animate();

function animate() {
  ctx.clearRect(0, 0, W, H);
  handleBg();
  ctx.font = "70px Verdana";
  ctx.fillStyle = "#F56D91";
  ctx.strokeText(score, 570, 70);
  ctx.fillText(score, 570, 70);
  handleObstacles();
  handleParticle();
  bird.update();
  bird.draw();
  handleCollision();
  if (handleCollision()) {
    return;
  }
  angle += 0.35;
  hue++;
  frame++;
  requestAnimationFrame(animate);
  // console.log(obstaclesArray);
}

addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    spacePressed = true;
  }
  height -= 20;
});
addEventListener("keyup", (e) => {
  if (e.code == "Space") {
    spacePressed = false;
  }
});

const boom = new Image();
boom.src = "boom.png";
const boom_audio = new Audio();
boom_audio.src = "boom.mp3";
function handleCollision() {
  for (let i = 0; i < obstaclesArray.length; i++) {
    if (
      bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
      bird.x + bird.width > obstaclesArray[i].x &&
      ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
        (bird.y > canvas.height - obstaclesArray[i].bottom &&
          bird.y + bird.height < canvas.height))
    ) {
      ctx.drawImage(boom, bird.x+10, bird.y-50, 100, 100);
      boom_audio.play();
      ctx.font = "30px Verdana";
      ctx.fillStyle = "white";
      ctx.fillText(
        "Game Over , your score is " + score,
        90,
        canvas.height / 2 - 10
      );
      return true;
    }
  }
}
