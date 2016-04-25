var app = angular.module("portfolio", ['ui.router'])
.directive('splat', function() {
  return {
    restrict: 'E',
    controller: 'splatCtrl'
  };
});

$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors: ['view1', 'view2', 'view3', 'view4', 'view5', 'view6', 'view7', 'view8'],
    menu: '#menu',
    css3: true,
    fitToSection: true,
    loopHorizontal: false,
    scrollingSpeed: 1000,
    setLockAnchors: false,
    navigation: false,
    slidesNavigation: true,
    resize:true
  });

  $(document).on('click', '#moveTo', function(){
    $.fn.fullpage.moveTo('view1', 0);
  });

  $('#showExamples').click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $('#examplesList').toggle();
  });

  $('html').click(function(){
    $('#examplesList').hide();
  });

  $('.menuopen').hide();

  $('.menu').on('click', (function(){
    $('.menuopen').slideToggle();

  }));
});
