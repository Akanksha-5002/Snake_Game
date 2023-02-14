
let inputDir = {  x: 0,  y: 0};                                       //javascript object snake will remian in one position ie dont move
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3'); // defining constants
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{
  x: 10,
  y: 1
}] //head of the snake

food = {
  x: 15,
  y: 15
}; //create food particle(it is not an array)

function test (){
    console.log(testing javascript);
}

//Gaame Functions
function main(ctime) {
  window.requestAnimationFrame(main); //Animation of the game
if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;                                                  //NO render ie dont paiint the screen
  }
  lastPaintTime = ctime;
  gameEngine();
}
function isCollide(sarr)
{
  return false;
}
function gameEngine() {
  //Part 1: Upadating snake array and food ie increase in size if snake eats and remains same if dosent interval
  //if snake collides
  if(isCollide(sankeArr))
  {
    gameOverSound.play();
    musicSound.pause();
    inputDir = {x:0,y:0};
    alert("GAME OVER!! PRESS TO PLAY AGAIN");
    snakeArr=[{x:12,y:15}];
    musicSound.play();
    score:0;
  }

// if you have eaten food increment the score and regenerate the foodSound

if(snakeArr[0].y==food.y && snakeArr[0].x==food.x)    //if position of food and snake is  same foos is createElement
{
  snakeArr.unshift({x: sankeArr[0].x + inputDir.x, y: sankeArr[0].y + inputDir.y})                                    //unshift adds ele to frony of an array ie we are adding one mundi to snake body after snake eats food
   //update food position as snake has already eat foodSound
   let a=2;
   let b=16;
   food= { x:Math.round( a +(b-a) * Math.random()), y:Math.round( a +(b-a) * Math.random()),}            //generate any random no(2-16) ie the axis for food placemement
}

//Moving the snakeElement
for(let i=snakeArr.length-2;i<array.length;i>=0;i--)  //start the movement of snake from second last position(i-2) andn move for  all the ele in array
{
  const element = array[i];
  snakeArr[i+1] ={...snakeArr[i]};
}

snakeArr[0].x +=inputDir.x;
snakeArr[0].y+=inputDir.y;
  //Part 2: Render the snake
  //dislay the snake
  board.innerHTML = " "; //cleaning anything present in the board
  snakeArr.forEach((e, index) => { //Elemnt and index of snake
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y; //jasa snake food khail tasa tyachi grid madhli position change hoel
    snakeElement.style.gridColumStart = e.x;
    snakeElement.classList.add('snake') //to add css create class
    if (index == 0) {
      snakeElement.classList.add('head'); //jar fakta head asel tar
    } else {
      snakeElement.classList.add('snake');
    }
    board.appendChild(snakeElement);
  });

  //display food
  foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y; //jasa snake food khail tasa tyachi grid madhli position change hoel
  foodElement.style.gridColumStart = food.x;
  foodElement.classList.add('food') //to add css create class
  board.appendChild(foodElement);

}

window.requestAnimationFrame(main)
window.addEventListener('keydown', e => { //if any key is pressed event is fired
  inputDir = {
    x: 0,
    y: 1
  } //start game when any key pressed
  moveSound.play();                     //play foodSound
  switch (e.key) {
    case "ArrowUp":                  /// tell that arrow key is pressed
      console.log("ArrowUp");
      inputDir.x=0                     // varti jayla hava asel tar y=-1
      inputDir.y=-1
      break;

    case "ArrowDown":                /// tell that arrow key is pressed
      console.log("ArrowDown");
      inputDir.x=0
      inputDir.y=1                     // khali jaya plus 1 for y according
      break;

    case "ArrowLeft":                  /// tell that arrow key is pressed
      console.log("ArrowLeft");
      inputDir.x= -1
      inputDir.y=0
      break;

    case "ArrowRight":                 /// tell that arrow key is pressed
      console.log("ArrowRight");
      inputDir.x= -1
      inputDir.y=0
       break;                                                             //  ...x..............
                                                                          // y :
                                                                          //  :
                                                                          //  :
                                                                          //  :
                                                                          //  :
     default:
       break;

  }
});
