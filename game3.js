let bg;
let endBG;
let polarBearImage;
let polarBearArray = [];
let polarBearX;
let polarBearY;
let polarBearLeft, polarBearRight, polarBearTop, polarBearBottom;
let score = 0;
let i;
let timer = 50;


function preload() {
    polarBearImage = loadImage("images/polarbear.jpg")
}

function setup() {
    bg = loadImage('images/glacier.jpg')
    endBG = loadImage('images/arcticanimals.jpg')
    let canvas = createCanvas(700, 500);
    canvas.position(300, 100)
    noStroke();
    rectMode(CENTER);
    for (let i = 0; i < 1; i++) {
        let temp = new polarBear(random(475, 625), random(325, 360), 40, 40);
        polarBearArray.push(temp);
    }
}

function draw() {
    background(bg);

    for (let i = 0; i < polarBearArray.length; i++) {
        image(polarBearImage, polarBearArray[i].xPos, polarBearArray[i].yPos, polarBearArray[i].sizeValue, polarBearArray[i].sizeValue);
    }
    textSize(27)
    text("score = " + score, 560, 30)
    text("Time: " + timer, 40, 30)
    if (frameCount % 60 == 0 && timer > 0) {
        timer--;
      }
      if (timer == 0) {
        background(endBG)
        textSize(29)
        text("GAME OVER", 250, 50);
        text("Your final score is: " + score, 225, 100)
        textSize(25)
        text("Amazing! The Polar Bear families live on!", 130, 150)
        text("Click anywhere on the screen to try again for a higher score!", 15, 400)
        text("OR, scroll down to learn more about Polar Bears", 80, 440)
        text("and the Polar Ice Caps!", 150, 480)
      }
}

function mouseClicked() {
    if (timer == 0) {
        location.reload()
    }
}


function mouseDragged() {
    for (let i = 0; i < polarBearArray.length; i++) {
    polarBearLeft = polarBearArray[i].xPos;
    polarBearRight = polarBearArray[i].xPos + polarBearArray[i].sizeValue;
    polarBearTop = polarBearArray[i].yPos;
    polarBearBottom = polarBearArray[i].yPos + polarBearArray[i].sizeValue;

    if (mouseX < polarBearRight || mouseX > polarBearLeft || mouseY < polarBearBottom || mouseY > polarBearTop) {
        polarBearArray[i].xPos = mouseX
        polarBearArray[i].yPos = mouseY
    }
}
}

function mouseReleased() {
    for (let i = 0; i < polarBearArray.length; i++) {
        if (polarBearArray[i].xPos > 300 && polarBearArray[i].yPos < 400) {
            polarBearArray[i].xPos = random(475, 625) 
            polarBearArray[i].yPos = random(325, 360)
        }
        else {
            score++
            console.log(score)
            polarBearArray[i].xPos = random(475, 625) 
            polarBearArray[i].yPos = random(325, 360)
        }
    }
}
      
//     }

// function mouseClicked() {
//     for (let i = 0; i < polarBearArray.length; i++) {

//     polarBearLeft = polarBearArray[i].xPos;
//     polarBearRight = polarBearArray[i].xPos + polarBearArray[i].sizeValue;
//     polarBearTop = polarBearArray[i].yPos;
//     polarBearBottom = polarBearArray[i].yPos + polarBearArray[i].sizeValue;

//     if (mouseX > polarBearRight || mouseX < polarBearLeft || mouseY > polarBearBottom || mouseY < polarBearTop) {
        
//     }

//     else {
//         console.log(score);
//         score++;
//         polarBearArray[i].xPos = random(50, 650)
//     }
// }
// }

class polarBear {
    constructor(x, y, size) {
        this.xPos = x;
        this.yPos = y;
        this.sizeValue = size
    }
}
