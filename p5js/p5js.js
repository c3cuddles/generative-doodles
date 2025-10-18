function setup() {
  createCanvas(180, 180);
  background(220);
  // line(30, 30, 65, random(0, 100));
  
  // lines seem to be of width 1 
  line (0,0, 30, 0)
  // line (0,1, 30, 1)
  line (0,2, 30, 2)
  // line (0,3, 30, 3)
  line (0,4, 30, 4)
  
  line (32, 4, 32, 4)
  
  // 36 sections of 30,30 each. So 6 sections across, 6 down
  
  /* procedure: 
  min = 5
  
  while there is height remaining, 
    if size < min: fill remaining with lines
    else:
      randomly choose height (portion of remaining height)
      while there is width remaining
        make a doodle!
        randomly choose shape
        if not square/circle: randomly choose width (portion of remaining)
        // i want squares and circles, not rectangles... consider enabling rectangles later?
  
  I want the doodles to be rectangular in shape, so like... if you pick a triangle, it will fill the area not filled by the triangle with lines
  
  possible doodles:
  - square
  - circle
  - triangle + lines
  - half circle
  - half circle + lines
  - quarter circle
  - quarter circle + lines
  
  color schemes:
  - pick 3 colors
  - doodle is random one of those colors
  - if doodle has multiple elements, make main shape (i.e. trianbgle) one color and the other lines another color
  */
  
}

function draw() {
}
