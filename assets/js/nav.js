$(document).ready(function(){
    $(".hamburger").click(function(){
      $("#mobile-menu").slideToggle();
      $(this).toggleClass('open');
    });
  });