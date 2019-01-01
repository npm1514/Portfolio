var app = angular.module("portfolio", ['ui.router']);


$(document).ready(function() {

  $('html').click(function(){
    $('#examplesList').hide();
  });

  $('.portfolio').on('click',function(){
    $('.menuopen').hide();
    $('html, body').animate({
        scrollTop: $(".view2").offset().top
    }, 1000);
  })
  $('.menu').on('click', function(){
    $('.menuopen').slideToggle();
  });

  $('main').on('click', function(){
    $('.menuopen').slideUp();
  });


  var io = new IntersectionObserver(
    (e, b) => {
      $('#'+e[0].target.id)[0].src = $('#'+e[0].target.id)[0].attributes['attr'].value
    }
  );
  // Start observing an element
  io.observe($('#bigimg1')[0]);
  io.observe($('#bigimg2')[0]);
  // io.observe($('#bigimg3')[0]);
  io.observe($('#bigimg4')[0]);
  //test comment
  //test comment 2
});
