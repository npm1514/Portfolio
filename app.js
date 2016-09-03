var app = angular.module("portfolio", ['ui.router']);

$(document).ready(function() {

  // $('#showExamples').click(function(e){
  //   e.stopPropagation();
  //   e.preventDefault();
  //   $('#examplesList').toggle();
  // });

  $('html').click(function(){
    $('#examplesList').hide();
  });

  $('.menuopen').hide();

  $('.portfolio').on('click',function(){
    $('.menuopen').hide();
    $('html, body').animate({
    scrollTop: $(".view2").offset().top
}, 1000);

  })
  $('.menu').on('click', function(){
    $('.menuopen').slideToggle();

  });
});
