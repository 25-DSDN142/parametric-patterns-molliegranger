//your parameter variables go here!
let circleSize = 60

let rayL = 150
let rayL2 = 50
let rayL3 = 50
let rayL4 = 150

let day = true;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
 
  
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(29, 58, 107); //night sky
  if(day== true){
  background(204, 235, 252); //day sky  
  }
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
strokeWeight(0);



fill(252, 238, 177); // star colour

if (day = true) {
fill (255, 200, 0);// sun colour
}


circle(100,100, circleSize); //middle of sun/star

quad(90, 100, 100, rayL, 110, 100, 100, rayL2); //vertical rays
quad(100, 90, rayL, 100, 100, 110, rayL2, 100); // horisontal rays

 push()
 translate(100,100)
 rotate(45)
 quad(100-90, 100-100, 100-100, 100-rayL3, 100-110, 100-100, 100-100, 100-rayL4); //diagonal rays /
 quad(100-100, 100-90, 100-rayL3, 100-100, 100-100, 100-110, 100-rayL4, 100-100); // diagonal rays \

 pop()

fill(255); // cloud colour
ellipse(-10, 20, 35);
ellipse(10, 15, 40, 48);
ellipse(30, 20, 35);

}