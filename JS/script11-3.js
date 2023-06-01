 
 
$(document).ready(function() {
  $("img").mousemove(function(e) { 
       
       $('#tooltip').css('left', e.pageX + 10)
           .css('top', e.pageY + 10)
           .css('display', 'block');       
   });

   $("img").mouseout(function() { 
       $('#tooltip').css('display', 'none');
   });
});