let bg;
let endBG;
let bucketImage;
let fireImage;
let fireArray = [];
let fireLeft, fireRight, fireTop, fireBottom;
let score = 0;
let i;
let timer = 10;

function preload() {
    bucketImage = loadImage("images/bucket.png")
    fireImage = loadImage("images/fire.jpg")
}

function setup() {
    bg = loadImage('images/forest.jpg')
    endBG = loadImage('images/happyanimals.jpg')
    let canvas = createCanvas(700, 500);
    canvas.position(300, 100)
    noStroke();
    rectMode(CENTER);
    for (let i = 0; i < 6; i++) {
        let temp = new fire(random(50, 650), 425, random(25, 75), random(25, 75));
        fireArray.push(temp);
    }
 }

function draw() {
    background(bg);
    image(bucketImage, mouseX, mouseY, 40, 50)
    for (let i = 0; i < fireArray.length; i++) {
        image(fireImage, fireArray[i].xPos, fireArray[i].yPos, fireArray[i].sizeValue, fireArray[i].sizeValue);
    }
    textSize(27)
    text("score = " + score, 560, 30)
    text("Time: " + timer, 40, 30)
    if (frameCount % 60 == 0 && timer >= 0) {
        timer--;
      }
      if (timer < 0) {
        background(endBG)
        textSize(29)
        text("GAME OVER", 250, 50);
        text("Your final score is: " + score, 225, 100)
        textSize(25)
        text("Great Job! The forest thanks you for your service!", 90, 150)
        text("Click anywhere on the screen to try again for a higher score!", 15, 210)
        text("OR, scroll down to learn more about forest fires!", 100, 240)
      }
      
    }

function mouseClicked() {
    for (let i = 0; i < fireArray.length; i++) {

    fireLeft = fireArray[i].xPos;
    fireRight = fireArray[i].xPos + fireArray[i].sizeValue;
    fireTop = fireArray[i].yPos;
    fireBottom = fireArray[i].yPos + fireArray[i].sizeValue;

    if (mouseX > fireRight || mouseX < fireLeft || mouseY > fireBottom || mouseY < fireTop) {
        
    }

    else {
        console.log(score);
        score++;
        fireArray[i].xPos = random(50, 650)
    }
    if (timer == 0) {
        location.reload()
    }
}
}

class fire {
    constructor(x, y, size) {
        this.xPos = x;
        this.yPos = y;
        this.sizeValue = size
    }
}