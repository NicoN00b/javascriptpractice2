$(document).ready(function() {
  $("button#kitty").click(function() {
    $("ul#cat").after("<li>Meow!</li>").append("<li><img src='img/puppy1.jpg'></li>");
    $("ul#dog").after("<li>Woof woof!</li>").append("<li><img src='img/kitty1.jpeg'></li>");
    $('li').click(function() {
      alert('hi');
    });
  });

  $("button#puppy").click(function() {
    $("ul#cat").after("<li>reeeoow!</li>").append("<li><img src='img/kitty2.jpeg'></li>");
    $("ul#dog").before("<li>rwah!</li>").append("<li><img src='img/puppy2.jpg'></li>");
  });
});
