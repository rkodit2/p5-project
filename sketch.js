// let positionX;
// let speedX;
// let positionY;
// let speedY;
// let defaultColor;
//
// function setup(){
//   createCanvas(1300,650);
//   background(252,186,3);
//   positionX = 100;
//   speedX = random(-9,9);
//   positionY = 100;
//   speedY = random(-9,9);
// }
//
// let value1 = 0;
// let value2 = 0;
// let value3 = 0;
// function draw(){
//   //if (toggle === false){
//   // if(toggle === true){
//
//   // } else {
//   //   background(235,64,52);
//   // }
//
//     for (let i =100; i < 1300; i+=150) {
//       //for (let j =100; j < 650; j+=150) {
//         fill(value1,value2,value3);
//         ellipse(i,positionY,100,100);
//
//         // if(toggle === true){
//         //   fill(random(0,255),random(0,255),random(0,255) );
//         //  }
//         positionX = positionX + speedX;
//         if(positionX >= 1300 - 50 || positionX <= 50){
//           speedX = speedX * -1;
//         }
//         positionY = positionY + speedY;
//         if(positionY >= 650 -50 || positionY <= 50){
//           speedY = speedY * -1;
//       }
//     //}
//   //}
//   // if(toggle === true){
//   //   fill(random(0,255),random(0,255),random(0,255) );
//   //  }
//   }
//
//
// }
// function mouseClicked(){
//   //defaultColor = fill(random(0,255),random(0,255),random(0,255);
//   value1 = random(0,255);
//   value2 = random(0,255);
//   value3 = random(0,255);
// }
//
// function keyPressed(){
//   if(keyCode === ENTER){
//     background(random(0,255), random(0,255), random(0,255));
//   }
// }




let positionX;
let speedX;
let positionY;
let speedY;
let defaultColor;
let imag;
let imagPositionX;
let imagPositionY;
let imagSpeedX;
let imagSpeedY;

function preload() {
  imag = loadImage('images/smileyface2.png');
}

function setup(){
  createCanvas(1300,650);
  background(252,186,3);

  positionX = 100;
  speedX = random(-9,9);
  positionY = 100;
  speedY = random(-9,9);
  imagPositionX = 100;
  imagPositionY = 100;
  imagSpeedX = random(-9,9);
  imagSpeedY = random(-9,9);
}

let value1 = 0;
let value2 = 0;
let value3 = 0;
function draw(){

  //if (toggle === false){
  // if(toggle === true){

  // } else {
  //   background(235,64,52);
  // }
    image(imag,imagPositionX,imagPositionY,100,100);
    for (let i =100; i < 1300; i+=150) {
      //for (let j =100; j < 650; j+=150) {
        fill(value1,value2,value3);
        ellipse(i,positionY,100,100);

        // if(toggle === true){
        //   fill(random(0,255),random(0,255),random(0,255) );
        //  }
        positionX = positionX + speedX;
        if(positionX >= 1300 - 50 || positionX <= 50){
          speedX = speedX * -1;
        }
        positionY = positionY + speedY;
        if(positionY >= 650 -50 || positionY <= 50){
          speedY = speedY * -1;
      }
      imagPositionX = imagPositionX + imagSpeedX;
      imagPositionY = imagPositionY + imagSpeedY;

      if (imagPositionX >= width || imagPositionX <= 0) {
        imagSpeedX = imagSpeedX * -1;
      }
      if (imagPositionY >= height || imagPositionY <= 0){
        imagSpeedY = imagSpeedY * -1;
      }
    //}
  //}
  // if(toggle === true){
  //   fill(random(0,255),random(0,255),random(0,255) );
  //  }
  }


}
function mouseClicked(){
  //defaultColor = fill(random(0,255),random(0,255),random(0,255);
  value1 = random(0,255);
  value2 = random(0,255);
  value3 = random(0,255);
}

function keyPressed(){
  if(keyCode === ENTER){
    background(random(0,255), random(0,255), random(0,255));
  }
}
