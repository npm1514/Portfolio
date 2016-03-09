app.controller("splatCtrl", function($scope) {


  var width = window.screen.width*0.65;
  var height = window.screen.height*0.65;
  console.log(width);

  $scope.splat = function() {

    d3.selectAll(".artworkOfWonder")
        .remove();

    var svg = d3.select("splat")
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
    for (var i = 0; i < (Math.random()*50); i++) {
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
          return d3.hsl(Math.random() * 360, 0.5, 0.5);
        })
        .style("stroke-width", function(d,i) {
          return Math.random()*40;
        })
        .attr('fill', 'none');
  };
  $scope.splat();
});
