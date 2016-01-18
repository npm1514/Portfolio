var app = angular.module("portfolio", ['ui.router']);

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

app.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'templates/aboutHome.html'
    })
    .state("artStuff", {
      url: "/artStuff",
      templateUrl: "templates/artStuff.html"
    })
    .state("buildStuff", {
      url: "/buildStuff",
      templateUrl: "templates/buildStuff.html"
    })
    .state("resume", {
      url: "/resume",
      templateUrl: "templates/resume.html"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "templates/contact.html"
    });
    $urlRouterProvider
      .otherwise('/about');
});
