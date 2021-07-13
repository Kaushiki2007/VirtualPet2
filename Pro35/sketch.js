var Database;
var foodS, foodStock, foodObject;
var dog, happyDog, sadDog;
var feedTime, lastFed;
var feed, addFood;
function preload()
{
	happyDog = loadImage("images/dogImg1.png");
  sadDog = loadImage("images/dogImg.png");
 
}

function setup() {
	createCanvas(1000, 400);
  //Database = firebase.database();
  foodObject = new Food();
  dog = createSprite(800,200,150,150);
  dog.addImage(sadDog);

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
  background(46, 139, 87);

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed :" +lastFed%12 + "PM", 350,30);
  }
  else if(lastFed == 0);
  { 
    text("Last Feed : 12 AM", 350,30);
  }
  drawSprites();
}

function addFoods(){
  foodS++;
  database.ref('/').update({
      Food:foodS
  })
  }

function feedDog(){
  dog.addImage(happyDog);
  foodObject.updatefoodStock(foodObject.getfoodStock()-1);
  database.ref('/').update({
    Food:foodObject.getfoodStock(),
    feedTime:hour()
  })
}

