function badPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 100, 100);
  
   rect ( x, y, 20, 90 ); 
  rect (x, y, 70, 20);
  line (x, y, x+55, x+55);
  colorMode (HSB)
fill(74,100,100); 
  ellipse (183, 183, 20, 20);
  colorMode (HSB)
  fill(18,166,184); 
  ellipse (170, 170, 10, 10); 
   colorMode (HSB)
  fill(168,100,67); 
  ellipse (160 ,160, 10, 10);
   colorMode (HSB)
  fill(52,85,72); 
  ellipse (150, 150, 10, 10);
 line (x+100, y, x+50,y+50); 

}

background(255);

badPatch((width-100)/2, (height-100)/2);
