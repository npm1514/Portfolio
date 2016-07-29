app.controller("splatCtrl", function($scope) {


  var width = window.innerWidth*0.75;
  var height = window.innerHeight*0.75;
  console.log(window);

  $scope.splat = function() {

    d3.selectAll(".artworkOfWonder")
        .remove();

    var svg = d3.select(".splat")
      .append("svg")
      .classed("artworkOfWonder",true)
      .attr("width", width)
      .attr("height", height);


    var line = d3.svg.line()
        .x(function(d) {
          return Math.random() * width;
        })
        .y(function(d) {
          return Math.random() * height;
        });

    var array = []; //determining total line count and total bends of each line
    for (var i = 0; i <= Math.ceil(Math.random()*10); i++) {
      array.push(1);
    }



    svg.selectAll("path")
        .data(array)
        .enter()
        .append("path")
        .attr("d", function() {
          return line(array);
        })
        .attr("class", "line")
        .style("stroke", function(d,i) {
          return d3.hsl(Math.random() * 360, 0.3, 0.5);
        })
        .style("stroke-width", function(d,i) {
          return Math.random()*30 + 5;
        })
        .attr('fill', 'none');
  };
  $scope.splat()
  setInterval(function(){$scope.splat()},2000);
});
