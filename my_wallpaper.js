//your parameter variables go here!
let circleSize = 60

let rayL = 10
let rayL2 = 190
//diagionals 
let rayL3 = 40
let rayL4 = 160

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(212, 243, 255); //sky blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
strokeWeight(0);
fill (255, 200, 0)

circle(100,100, circleSize);

quad(90, 100, 100, rayL, 110, 100, 100, rayL2); //vertical
quad(100, 90, rayL, 100, 100, 110, rayL2, 100); // horisontal


 push()
 translate(100,100)
 rotate(45)
 quad(100-90, 100-100, 100-100, 100-rayL3, 100-110, 100-100, 100-100, 100-rayL4); //vertical
 quad(100-100, 100-90, 100-rayL3, 100-100, 100-100, 100-110, 100-rayL4, 100-100); // horisontal

 pop()


}
