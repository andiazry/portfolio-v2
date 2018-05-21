$(document).ready(function() {
  $('.containerRight__overlay').click(function() {
    $('aside').toggleClass('open');
  });

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
