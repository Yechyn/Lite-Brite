 
function main() {
   var colorClass = ' ';
  $(".select-color").on('click', 
  function() {
    var selectedColor = $(this).attr('class');
    switch (selectedColor) {
      case 'select-color cyan not-selected':
      colorClass = 'cyan';
      break;

      case 'select-color yellow not-selected':
      colorClass = 'yellow';
      break;

      case 'select-color magenta not-selected':
      colorClass = 'magenta';
      break;
    };
    $(this).removeClass('non-selected');
    $(this).siblings().addClass('not-selected');
    });
   
$('.box').on('click', function() {
    $(this).toggleClass(colorClass)
  });
  
  $('.toggle-blink').on('click', function() {
    if (colorClass) {
      $('.toggle-blink').toggleClass('opacity');
    };
       
   var id = setInterval(function() {
 $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
}, 350);
   
  });
  $('.toggle-blink').hasClass('blink')?id : clearInterval(id);
var clearInterval = window.setInterval('cyan', 'yellow' , 'magenta');
  
};

$(document).ready(main);