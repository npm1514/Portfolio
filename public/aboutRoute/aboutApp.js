var app = angular.module("aboutApp", ['ui.router']);

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

app.controller("emailCtrl", function($scope, emailServ) {
  $scope.responseMessage = '';
  $scope.badEmail ='';
  $scope.sendEmail = function(name, email, message) {
    if (email) {
    emailServ.sendEmail(name, email, message)
    .then(function(response){
      $scope.responseMessage = response;
    });
    }
    else {
      $scope.badEmail = "Please enter a valid email.";
    }
  };
});

app.directive('emailDir',function(){
  return {
    restrict: 'E',
    controller: 'emailCtrl',
    template: '<div class="emailResponse"><h1>{{responseMessage}}</h1></div>'
  };
});



app.service("emailServ", function($http) {

  this.sendEmail = function(name, email, message) {
    if (name && email && message) {
      return $http({
          "method": "POST",
          "url": "https://mandrillapp.com/api/1.0/messages/send.json",
          "data": {
            "key": "m9WhwvP-pCZrAOmfEmMceg",
            "message": {
              "from_email": "npm1514@gmail.com",
              "to": [{
                "email": "npmarucci@sol-innovations.com",
                "name": "Sol Innovations",
                "type": "to"
              }],
              "autotext": true,
              "subject": "Customer Inquiry - " + name + " @ " + email,
              "text": message
            }
          }
        })
        .then(function itWorked(response) {
          return "Your email has been received. I will get back to you within the next 48 hours.";
        }, function itDidntWork(response){
          return "Whoops! Something went wrong. Please contact me via email or give me a call.";
        });
    }
  };
});

$(document).ready(function() {

  $('i').on('click', (function(){
    $('.navwrap').slideToggle();
  }));
});
