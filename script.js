$(document).ready(function() {
    $("#port_controls").on('click', 'span', function() {
      $("#portpic img").removeClass("opaque");
  
      var newImage = $(this).index();
  
      $("#portpic img").eq(newImage).addClass("opaque");
  
      $("#port_controls span").removeClass("selected");
      $(this).addClass("selected");
    });
  });