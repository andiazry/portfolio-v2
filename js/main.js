$(document).ready(function() {
  $('.overlay__toggle').click(function() {
    $('aside').toggleClass('open');
  });

  $('.overlay__hover').hover(
    function() {
      $('.overlay__toggle').css('background-color', '#15624f');
      $('.overlay__toggle').css('background-image', 'url(img/icons/dribbble.svg)');
    },
    function() {
      $('.overlay__toggle').css('background-color', 'white');
      $('.overlay__toggle').css('background-image', 'url(img/profilePhoto-min.jpg)');
    }
  );
});
