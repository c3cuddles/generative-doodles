function setup() {
  HEIGHT = 180;
  WIDTH = 180;

  createCanvas(WIDTH, HEIGHT);
  background(220);

  /*
  // playing around...
  // line(30, 30, 65, random(0, 100));
  
  // lines seem to be of width 1 
  line (0,0, 30, 0)
  // line (0,1, 30, 1)
  line (0,2, 30, 2)
  // line (0,3, 30, 3)
  line (0,4, 30, 4)
  
  line (32, 4, 32, 4)
  */

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

  // remainingHeight acts as a sort of scanline for where we are in the drawing
  remainingHeight = HEIGHT;
  MIN = 5;
  MAX_BLOCK_SIZE = 30;

  while (remainingHeight > MIN) {
    // no need to edit a constant! Just do Math.min instead
    // if (remainingHeight < MAX_BLOCK_SIZE) MAX_BLOCK_SIZE = remainingHeight;
    thisBlockHeight = random(MIN, Math.min(remainingHeight, MAX_BLOCK_SIZE));

    // similarly, remainingWidth is our vertical scan line
    remainingWidth = WIDTH;
    while (remainingWidth > 0) {
      thisBlockWidth = random(MIN, Math.min(remainingWidth, MAX_BLOCK_SIZE));

      // randomly pick a doodle and make it!
      generate_doodle(
        WIDTH - remainingWidth,
        HEIGHT - remainingHeight,
        thisBlockWidth,
        thisBlockHeight
      );

      remainingWidth -= thisBlockWidth;
      remainingWidth -= 2; // give some space!
    }

    remainingHeight -= thisBlockHeight; // move scan line past this block
    remainingHeight -= 2; // skip one line for pretty spacing :)
  }

  while (remainingHeight > 0) {
    // do something to fill remaining?
    line(0, remainingHeight, WIDTH, remainingHeight);
    remainingHeight -= 2;
  }
}

/**
 * Makes a doodle!
 *
 * In the case of square, will choose the min(width, height) for size.
 *
 * @param {*} x
 * @param {*} y
 * @param {*} width
 * @param {*} height
 */
function generate_doodle(x, y, width, height) {
  console.log("generating doodle...");
  NUM_POSSIBLE_DOODLES = 1;
  chosenDoodle = random(1, NUM_POSSIBLE_DOODLES);

  switch (chosenDoodle) {
    case 1: // square
      console.log("chose square!");
      square(x, y, Math.min(width, height));
      break;

    default:
      // this should never happen! Whoops
      console.log(
        "Invalid doodle selected in generate_doodle, switch(chosenDoodle)"
      );
      break;
  }
  console.log("done generating doodle :)");
}

function draw() {}
