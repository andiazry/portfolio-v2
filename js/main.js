$(document).ready(function() {
  // Navbar color change on scroll

  $('body')
    .delay(500)
    .fadeIn(1000);

  $(window).scroll(function() {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 100);
  });

  // About page overlay toggle
  $('.nav__main--overlay').click(function() {
    $('aside').toggleClass('open');
  });

  // Projects scroll change image
  $('.containerLeft__projects--list01').hover(
    function() {
      $('.containerRight__photo')
        .removeClass('containerRight__photo')
        .addClass('project__overlay--01');
    },
    function() {
      $('.project__overlay--01')
        .removeClass('project__overlay--01')
        .addClass('containerRight__photo');
    }
  );

  $('.containerLeft__projects--list02').hover(
    function() {
      $('.containerRight__photo')
        .removeClass('containerRight__photo')
        .addClass('project__overlay--02');
    },
    function() {
      $('.project__overlay--02')
        .removeClass('project__overlay--02')
        .addClass('containerRight__photo');
    }
  );

  $('.containerLeft__projects--list03').hover(
    function() {
      $('.containerRight__photo')
        .removeClass('containerRight__photo')
        .addClass('project__overlay--03');
    },
    function() {
      $('.project__overlay--03')
        .removeClass('project__overlay--03')
        .addClass('containerRight__photo');
    }
  );
});
