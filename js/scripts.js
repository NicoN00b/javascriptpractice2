$(document).ready(function() {
  $("button#kitty").click(function() {
    $("ul#cat").append("<li>Meow! <img src='img/puppy1.jpg' id='puppy1'></li>");
    $("ul#dog").append("<li>Woof woof! <img src='img/kitty1.jpeg' id='kitty1'</li>");
    $('li').click(function() {

      $("ul#cat").children('li').first().click(function() {
        $(this).remove();
      });
      $("ul#dog").children('li').first().click(function() {
        $(this).remove();
      });
    });
  });

  $("button#puppy").click(function() {
    $("ul#cat").append("<li>reeeoow! <img src='img/kitty2.jpeg' id='kitty2'></li>");
    $("ul#dog").append("<li>rwah! <img src='img/puppy2.jpg' id='puppy2'></li>");

    $("ul#cat").children('li').first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children('li').first().click(function() {
      $(this).remove();
    });
  });
});
