// Images asset
const geology1 = {
    1:'images/geology1_partone/footage/geology1_partone_0016.jpeg',
    2:'images/geology1_partone/footage/geology1_partone_0017.jpeg',
    3:'images/geology1_partone/footage/geology1_partone_0018.jpeg',
    4:'images/geology1_partone/footage/geology1_partone_0019.jpeg',
    5:'images/geology1_partone/footage/geology1_partone_0020.jpeg',
    6:'images/geology1_partone/footage/geology1_partone_0021.jpeg',
    7:'images/geology1_partone/footage/geology1_partone_0022.jpeg',
    8:'images/geology1_partone/footage/geology1_partone_0023.jpeg',
    9:'images/geology1_partone/footage/geology1_partone_0024.jpeg',
    10:'images/geology1_partone/footage/geology1_partone_0025.jpeg',
    11:'images/geology1_partone/footage/geology1_partone_0026.jpeg',
    12:'images/geology1_partone/footage/geology1_partone_0027.jpeg',
    13:'images/geology1_partone/footage/geology1_partone_0028.jpeg',
    14:'images/geology1_partone/footage/geology1_partone_0029.jpeg',
    15:'images/geology1_partone/footage/geology1_partone_0030.jpeg',
}
// Global variable to control the scrolling behavior
const step = 60; // For each 30px, change an image
function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/30) + 1, 15);
  const imageToUse = geology1[label];
  // Change the background image
  $('.image-container1').css('background-image', `url('${imageToUse}')`);
}
$(document).ready(()=>{
  $(window).scroll(()=>{
    trackScrollPosition();
  })
})
