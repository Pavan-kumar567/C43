var army_image,army1_image,aagni_image,akash_image,brahmos_image;
var army,army1,aagni,akash,brahmos;
function preload(){
  army_image = loadImage("army.png");
  army1_image = loadImage("army1.png");
  akash_image = loadImage("akashMissile.jpg");
  aagni_image = loadImage("aagniMissile.jpg");
  brahmos_image = loadImage("brahmosMissile.jpg");
}

function setup() {
  createCanvas(1200,800);
  army = createSprite (600,200,10,10);
  army.addImage(army_image);
  army1 = createSprite (600,100,10,10);
  army1.addImage(army1_image);
}




function draw() {
  background("white");  
  drawSprites();
}