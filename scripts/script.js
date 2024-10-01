$(document).ready(function(){
  
  $('#reset').on('click', function(){
    
     $("img").css('top', '0px').css('left','0px');
  })
  
  $("img").draggable( 
  {
      stop: function() {
        if ( $("img").position().left > 100)
          {
            $("body").append("<h2>YOU WON... MAKE A WISH!!!</h2> ") 
          }
        if ( $("img").position().right > 100)
          {
            $("body").append("<h2>YOU WON... MAKE A WISH!!!</h2>")
          }
 
      }
  });  
});