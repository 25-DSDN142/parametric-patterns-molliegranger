//your parameter variables go here!
let circleSize = 70 //changes size of center of sun

// ray lengths
let rayL = 100 // change length of east and south pointing rays
let rayL2 = 100 // change length of north and west pointing rays
let rayL3 = 0 // change length of se and sw pointing rays
let rayL4 = 0 // change length of nw and ne pointing rays

let day = false //change between day and night 
let darkcloud = false //change clouds to night or stormy

let showbigstar = true // turn sun/star on or off
let showlittlestars = true // turn little star on or off
let showcloud = false //turn cloud on or off
let crescent = true // turns moon into crescent shape when true

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
  if(day == true){
  background(204, 235, 252); //day sky  
  }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
strokeWeight(0);
if (day == false && showlittlestars == true) {
 fill(252, 238, 177); // soft white-yellow
 circle(30, 40, 10);
 circle(60, 70, 3);
 circle(150, 50, 3);
 circle(100, 120, 4);
 circle(170, 180, 3);

 quad(38, 150, 40, 160, 42, 150, 40, 140); //vertical rays
 quad(40, 148, 50, 150, 40, 152, 30, 150); // horisontal rays
 }

if (showbigstar ==true){
 if (day == true){
 fill (255, 200, 0);// sun colour
 } 
 if (day == false) {
 fill(252, 238, 177); // star colour
 }
 circle(100,100, circleSize); //middle of sun/star
 if (day == false && crescent == true) {
 fill(29, 58, 107); // background sky color
 circle(92, 100, circleSize); // overlapping shape to cut crescent
  }

quad(90, 100, 100, rayL, 110, 100, 100, rayL2); //vertical rays
quad(100, 90, rayL, 100, 100, 110, rayL2, 100); // horisontal rays

 push()
 translate(100,100)
 rotate(45)
 quad(100-90, 100-100, 100-100, 100-rayL3, 100-110, 100-100, 100-100, 100-rayL4); //diagonal rays /
 quad(100-100, 100-90, 100-rayL3, 100-100, 100-100, 100-110, 100-rayL4, 100-100); // diagonal rays \

 pop()
}

if (showcloud == true) {
 if (darkcloud == true) {
 fill(112, 128, 156); // stormy/night cloud colour
 }
 if (darkcloud == false) {
 fill(255); // day cloud colour
 }

 ellipse(-20, 5, 35);
 ellipse(0, 0, 40, 48);
 ellipse(20, 5, 35);
}
}