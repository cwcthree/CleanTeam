let bg;
let endbg
let trashcanimage;
let xPos = 25;;
let direction = 1;
let foodwasteimage;
let othercanimage;
let i;
let score = 0;
let foodwasteArray = [];
let foodwasteLeft, foodwasteRight, foodwasteTop, foodwasteBottom;
let timer = 15;
let canimage;

function preload() {
    trashcanimage = loadImage("images/Trashcan.png")
    foodwasteimage = loadImage("images/food-waste.png")
    othercanimage = loadImage("images/other-can.png")
    canimage = loadImage("images/can.png")
}

function setup() {
    bg = loadImage("images/beach.png")
    endbg= loadImage('images/sea-animals.png')
    let canvas = createCanvas(900, 700);
    canvas.position(200, 100)
    noStroke();
    rectMode(CENTER)
    for (let i = 0; i < 6; i++) {
      let temp = new foodwaste(random(50, 650), 425, random(25, 75), random(25, 75));
      foodwasteArray.push(temp);
  }
   
}

function draw() {
    background(bg);
    image(trashcanimage, mouseX, mouseY, 40, 50)
    for (let i = 0; i < foodwasteArray.length; i++) {
      image(foodwasteimage, foodwasteArray[i].xPos, foodwasteArray[i].yPos, foodwasteArray[i].sizeValue, foodwasteArray[i].sizeValue);
    }
   

 
   textSize(27)
   text("score = " + score, 560, 30)
   text("Time: " + timer, 40, 30)
   if (frameCount % 60 == 0 && timer > 0) {
       timer--;
     }
     if (timer == 0) {
       background(endbg)
       textSize(29)
       text("GAME OVER", 250, 50);
       text("Your final score is: " + score, 225, 100)
       textSize(25)
       text("Great! You have helped to save the Sea animals!", 90, 150)
     }
     
   }


   function mouseClicked() {
    for (let i = 0; i < foodwasteArray.length; i++) {

    foodwasteLeft = foodwasteArray[i].xPos;
    foodwasteRight = foodwasteArray[i].xPos + foodwasteArray[i].sizeValue;
    foodwasteTop = foodwasteArray[i].yPos;
    foodwasteBottom = foodwasteArray[i].yPos + foodwasteArray[i].sizeValue;

    if (mouseX > foodwasteRight || mouseX < foodwasteLeft || mouseY > foodwasteBottom || mouseY < foodwasteTop) {
        
    }

    else {
        score+= 1;
        console.log(score);
        foodwasteArray[i].random(50, 650)
        
    }
    if (timer == 0) {
        location.reload()
    }

}
}

class foodwaste {
    constructor(x, y, size) {
        this.xPos = x;
        this.yPos = y;
        this.sizeValue = size
    }
}