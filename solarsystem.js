function setup() {

  createCanvas(500, 500);
 
}

function draw() {
  background(0);
  fill(255,200,0);
  ellipse(width / 2, height / 2, 60, 60);

  let angle = frameCount;
  fill(51, 158, 255);
  translate(width/2, height/2);
  rotate(radians(angle));
  ellipse(100, 150, 10,10);
  
  fill(179, 179, 179  );
  translate(100, 150);
  rotate(radians(angle));
  ellipse(10, 10 ,5 ,5);
}