//your parameter variables go here!
//big sun/star/moon apperance
let circleSize = 70 //size of sun/star center
let showbigstar = true // show or hide big sun/star
let crescent = true // show cresent moon shape if night 

//ray lengths
let rayL = 100 // east and south pointing rays
let rayL2 = 100 // north and west pointing rays
let rayL3 = 0 // south-east and south-west pointing rays
let rayL4 = 0 // north-west and north-east pointing rays

//sky and weather
let day = false //change between day and night background
let showcloud = false //show or hide clouds
let darkcloud = false //cloud colour, true: night/stormy, false: day/white 

//small stars
let showlittlestars = true // show or hide little star

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
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
//little stars
if (day == false && showlittlestars == true) {
 fill(252, 238, 177); // star colour
 circle(30, 40, 10);
 circle(60, 70, 3);
 circle(150, 50, 3);
 circle(100, 120, 4);
 circle(170, 180, 3);
 
 //small sparkle rays
 quad(38, 150, 40, 160, 42, 150, 40, 140); //vertical rays
 quad(40, 148, 50, 150, 40, 152, 30, 150); // horisontal rays
 }
// sun/star/moon
if (showbigstar ==true){
 if (day == true){
 fill (255, 200, 0);// sun colour
 } 
 if (day == false) {
 fill(252, 238, 177); // star colour
 }

 circle(100,100, circleSize); //center of sun/star

 if (day == false && crescent == true) {
 fill(29, 58, 107); // night sky color to cut out cresent
 circle(92, 100, circleSize); 
  }

//star/sun rays 
quad(90, 100, 100, rayL, 110, 100, 100, rayL2); //vertical rays
quad(100, 90, rayL, 100, 100, 110, rayL2, 100); // horisontal rays

 push()
 translate(100,100)
 rotate(45)
 quad(100-90, 100-100, 100-100, 100-rayL3, 100-110, 100-100, 100-100, 100-rayL4); //diagonal rays /
 quad(100-100, 100-90, 100-rayL3, 100-100, 100-100, 100-110, 100-rayL4, 100-100); // diagonal rays \

 pop()
}
// clouds
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