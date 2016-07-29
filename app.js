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

  $('.menu').on('click', (function(){
    $('.menuopen').slideToggle();

  }));
});
