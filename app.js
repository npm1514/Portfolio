var app = angular.module("portfolio", ['ui.router'])
.directive('body', function() {
 return {
   restrict: 'E',
   scope: {
     zoomin: '=',
     zoomout: '='
   }
 };
})
.directive('earth', function() {
 return {
   restrict: 'E',
   scope: {
     zoomin: '=',
     zoomout: '=',
     cohortupdate:'='
   },
   controller: 'earthCtrl'
 };
})
.directive('bars', function() {
 return {
  restrict: 'E',
  scope: {
    data:'=',
    cohortupdate:'=',
  },
  controller: 'barsCtrl'
 };
})
.directive('splat', function() {
  return {
    restrict: 'E',
    controller: 'splatCtrl'
  };
})
.directive('scrollbar', function() {
 return {
   restrict: 'E',
   scope: {
     cohortupdate: '=',
     arcit: '&',
     viewdate: '=',
     play: '='
   },
   controller: 'scrollbarCtrl'
 };
});

$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors: ['view1', 'view2', 'view3', 'view4', 'view5'],
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
