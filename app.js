var app = angular.module("portfolio", ['ui.router']);

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['view1', 'view2', 'view3', 'view4', 'view5'],
    menu: '#menu',
    css3: true,
    scrollingSpeed: 1000,
    lockAnchors: false,
    navigation: false,
    slidesNavigation: true,
    resize:true
  });

  $('#showExamples').click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $('#examplesList').toggle();
  });

  $('html').click(function(){
    $('#examplesList').hide();
  });
});

app.config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
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
      .otherwise('/');
});
