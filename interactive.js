let img1;
let img2;
let img3;
let img4;
let img5;
let img6;


function preload(){
  img1 = loadImage("Curly-hair-type-3A-web.webp");
  img2 = loadImage("Curly-hair-type-3B-web.webp");
  img3 = loadImage("Curly-hair-type-3C-web.jpg");
  img4 = loadImage("Coily-curls-type-4A-web.jpg");
  img5 = loadImage("Coily-curls-type-4B-web.jpg");
  img6 = loadImage("Coily-curls-type-4C-web.jpg");
    }
function setup() {
  background(255, 249, 239)
    createCanvas(750,500);
    image(img1, 0, 0, 240,240);
    image(img2, 250, 0, 240, 240);
    image(img3, 500, 0, 240, 240);
    image(img4, 0, 250, 240,240);
    image(img5, 250, 250, 240, 240);
    image(img6, 500, 250, 240, 240);
  }
 
  function mousePressed(){
if (mouseX<250 && mouseY<250) {
  window.open("https://www.byrdie.com/type-3a-hair-5271293");
  } 
  if (mouseX<500 && mouseY<250){
    window.open("https://www.byrdie.com/type-3b-hair-what-it-is-and-how-to-care-for-it-5225581") 
  }
    if (mouseX <750 && mouseY<250){
    window.open("https://www.byrdie.com/type-3c-hair-5525406")
  }
  if (mouseX<250 && mouseY<500) {
    window.open("https://www.byrdie.com/type-4a-hair-5248750");
    } 
    if (mouseX<500 && mouseY<500){
      window.open("https://www.byrdie.com/type-4b-hair-5496725") 
    }
      if (mouseX <750 && mouseY<500){
      window.open("https://www.byrdie.com/type-4c-hair-6829373")
    }
  
}
  function draw() {
    
  }
