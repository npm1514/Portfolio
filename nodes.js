$(document).ready(function() {
  var w = window.innerWidth - 20,
      viewh = window.innerHeight - 20,
      h = $('html').height(),
      labelDistance = 0,
      nodes = [],
      labelAnchors = [],
      links = [];
  console.log(window);
  console.log(h)


  var vis = d3.select("body")
    .insert("svg:svg",":first-child")
    .attr("class", "noders")
    .attr("width", w)
    .attr("height", h);

  for(var i = 0; i < 7; i++) {
    var node = {
      label : ""
    };
    nodes.push(node);
    var noder = {
      node: node
    }
    labelAnchors.push(noder);
    labelAnchors.push(noder);
  };

  for(var i = 0; i < nodes.length; i++) {
    // nodes[i].px = Math.random()*w/2;

    nodes[i].x = Math.random()*w;
    // nodes[i].py = Math.random()*viewh/2;
    nodes[i].y = (viewh * i);
    for(var j = 0; j < i; j++) {
        links.push({
          source : i,
          target : i - 1,
          weight : Math.random()
        });
    }
  };

  var force = d3.layout
    .force()
    .size([w, h])
    .nodes(nodes)
    .links(links)
    .gravity(0)
    .linkDistance(viewh + 10)
    .charge(-10)
    .linkStrength(function(x) {
      return x.weight
    });

  force.start();

  var force2 = d3.layout
    .force()
    .nodes(labelAnchors)
    .gravity(1)
    .linkDistance(0)
    .linkStrength(10)
    .charge(-10)
    .size([w, h]);

  force2.start();

  var link = vis.selectAll("line.link")
    .data(links)
    .enter()
    .append("svg:line")
    .attr("class", "link")
    .style("stroke", function(d){
      return d3.hsl(Math.random()*360,0.5,0.5);
    })
    .style("stroke-width", 2)
    .style("opacity", 0.75);

  var node = vis.selectAll("g.node")
    .data(force.nodes())
    .enter()
    .append("svg:g")
    .attr("class", "node");

  node.append("svg:circle")
    .attr("r", 20)
    .style("fill", "#fff")
    .style("opacity", 0.65)
    .style("stroke", function(d){
      return d3.hsl(Math.random()*360,0.5,0.5);
    })
    .style("stroke-width", 3);

  node.call(force.drag);

  var anchorNode = vis.selectAll("g.anchorNode")
    .data(force2.nodes())
    .enter()
    .append("svg:g")
    .attr("class", "anchorNode");

  anchorNode.append("svg:circle");

  anchorNode.append("svg:text");

  var updateLink = function() {
    this.attr("x1", function(d) {
      return d.source.x;
    }).attr("y1", function(d) {
      return d.source.y;
    }).attr("x2", function(d) {
      return d.target.x;
    }).attr("y2", function(d) {
      return d.target.y
    });
  };

  var updateNode = function() {
    this.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

  }


  force.on("tick", function() {
    force2.start();
    node.call(updateNode);
    anchorNode.each(function(d, i) {
      if(i % 2 == 0) {
        d.x = d.node.x;
        d.y = d.node.y;
      } else {
        var b = this.childNodes[1].getBBox();
        var diffX = d.x - d.node.x;
        var diffY = d.y - d.node.y;
        var dist = Math.sqrt(diffX * diffX + diffY * diffY);
        if (dist != 0) {
          var shiftX = b.width * (diffX - dist) / (dist * 2);
        } else {
          var shiftX = b.width * (diffX - dist);
        }
        shiftX = Math.max(-b.width, Math.min(0, shiftX));

        var shiftY = 5;
        this.childNodes[1]
          .setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
      }
    });

    anchorNode.call(updateNode);
    link.call(updateLink);
  });
});
