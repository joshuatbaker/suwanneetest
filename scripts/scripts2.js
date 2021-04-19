
// Images asset
const timelapseWhole = {
    1:'images/timelapse/whole/whole_84.png',
    2:'images/timelapse/whole/whole_85.png',
    3:'images/timelapse/whole/whole_86.png',
    4:'images/timelapse/whole/whole_87.png',
    5:'images/timelapse/whole/whole_88.png',
    6:'images/timelapse/whole/whole_89.png',
    7:'images/timelapse/whole/whole_90.png',
    8:'images/timelapse/whole/whole_91.png',
    9:'images/timelapse/whole/whole_92.png',
    10:'images/timelapse/whole/whole_93.png',
    11:'images/timelapse/whole/whole_94.png',
    12:'images/timelapse/whole/whole_95.png',
    13:'images/timelapse/whole/whole_96.png',
    14:'images/timelapse/whole/whole_97.png',
    15:'images/timelapse/whole/whole_98.png',
    16:'images/timelapse/whole/whole_99.png',
    17:'images/timelapse/whole/whole_00.png',
    18:'images/timelapse/whole/whole_01.png',
    19:'images/timelapse/whole/whole_02.png',
    20:'images/timelapse/whole/whole_03.png',
    21:'images/timelapse/whole/whole_04.png',
    22:'images/timelapse/whole/whole_05.png',
    23:'images/timelapse/whole/whole_06.png',
    24:'images/timelapse/whole/whole_07.png',
    25:'images/timelapse/whole/whole_08.png',
    26:'images/timelapse/whole/whole_09.png',
    27:'images/timelapse/whole/whole_10.png',
    28:'images/timelapse/whole/whole_11.png',
    29:'images/timelapse/whole/whole_12.png',
    30:'images/timelapse/whole/whole_13.png',
    31:'images/timelapse/whole/whole_14.png',
    32:'images/timelapse/whole/whole_15.png',
    33:'images/timelapse/whole/whole_16.png',
    34:'images/timelapse/whole/whole_17.png',
    35:'images/timelapse/whole/whole_18.png',
    36:'images/timelapse/whole/whole_19.png',
    37:'images/timelapse/whole/whole_20.png',
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
