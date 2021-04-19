
// Images asset
const timelapseWhole = {
    1:'images/timelapse/whole/whole_84.jpg',
    2:'images/timelapse/whole/whole_85.jpg',
    3:'images/timelapse/whole/whole_86.jpg',
    4:'images/timelapse/whole/whole_87.jpg',
    5:'images/timelapse/whole/whole_88.jpg',
    6:'images/timelapse/whole/whole_89.jpg',
    7:'images/timelapse/whole/whole_90.jpg',
    8:'images/timelapse/whole/whole_91.jpg',
    9:'images/timelapse/whole/whole_92.jpg',
    10:'images/timelapse/whole/whole_93.jpg',
    11:'images/timelapse/whole/whole_94.jpg',
    12:'images/timelapse/whole/whole_95.jpg',
    13:'images/timelapse/whole/whole_96.jpg',
    14:'images/timelapse/whole/whole_97.jpg',
    15:'images/timelapse/whole/whole_98.jpg',
    16:'images/timelapse/whole/whole_99.jpg',
    17:'images/timelapse/whole/whole_00.jpg',
    18:'images/timelapse/whole/whole_01.jpg',
    19:'images/timelapse/whole/whole_02.jpg',
    20:'images/timelapse/whole/whole_03.jpg',
    21:'images/timelapse/whole/whole_04.jpg',
    22:'images/timelapse/whole/whole_05.jpg',
    23:'images/timelapse/whole/whole_06.jpg',
    24:'images/timelapse/whole/whole_07.jpg',
    25:'images/timelapse/whole/whole_08.jpg',
    26:'images/timelapse/whole/whole_09.jpg',
    27:'images/timelapse/whole/whole_10.jpg',
    28:'images/timelapse/whole/whole_11.jpg',
    29:'images/timelapse/whole/whole_12.jpg',
    30:'images/timelapse/whole/whole_13.jpg',
    31:'images/timelapse/whole/whole_14.jpg',
    32:'images/timelapse/whole/whole_15.jpg',
    33:'images/timelapse/whole/whole_16.jpg',
    34:'images/timelapse/whole/whole_17.jpg',
    35:'images/timelapse/whole/whole_18.jpg',
    36:'images/timelapse/whole/whole_19.jpg',
    37:'images/timelapse/whole/whole_20.jpg',
}
// Global variable to control the scrolling behavior
const step = 60; // For each 30px, change an image
function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/30) + 1, 37);
  const imageToUse = timelapseWhole[label];
  // Change the background image
  $('.image-container2').css('background-image', `url('${imageToUse}')`);
}
$(document).ready(()=>{
  $(window).scroll(()=>{
    trackScrollPosition();
  })
})
