//your parameter variables go here!
let circleSize = 0

let rayL = 150
let rayL2 = 50
let rayL3 = 50
let rayL4 = 150

let day = true;
let storm = false;

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

if (day = true) {
fill (255, 200, 0);// sun colour
}

fill(252, 238, 177); // star colour

circle(100,100, circleSize); //middle of sun/star

quad(90, 100, 100, rayL, 110, 100, 100, rayL2); //vertical rays
quad(100, 90, rayL, 100, 100, 110, rayL2, 100); // horisontal rays

 push()
 translate(100,100)
 rotate(45)
 quad(100-90, 100-100, 100-100, 100-rayL3, 100-110, 100-100, 100-100, 100-rayL4); //diagonal rays /
 quad(100-100, 100-90, 100-rayL3, 100-100, 100-100, 100-110, 100-rayL4, 100-100); // diagonal rays \

 pop()


 if (storm = true) {
fill(112, 128, 156); // day cloud colour
}
fill(255); // night cloud colour

ellipse(-20, 5, 35);
ellipse(0, 0, 40, 48);
ellipse(20, 5, 35);


}
