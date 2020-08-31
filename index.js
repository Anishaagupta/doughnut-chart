// var data = [
//     {name: "USA", value: 40},
//     {name: "UK", value: 20},
//     {name: "Canada", value: 30},
//     {name: "Maxico", value: 10},
//   ];

var data = [
    { 
        genre: "Action", 
        count: "64"
        }, 
        { 
        genre: "Animation", 
        count: "66"
        }, 
        { 
        genre: "Children", 
        count: "60" 
        }, 
        { 
        genre: "Classics", 
        count: "57"
        }, 
        { 
        genre: "Comedy", 
        count: "58"
        }, 
        { 
        genre: "Documentary", 
        count: "68"
        }, 
        { 
        genre: "Drama", 
        count: "62"
        }, 
        { 
        genre: "Family", 
        count: "69"
        }, 
        { 
        genre: "Foreign", 
        count: "73"
        }, 
        { 
        genre: "Games", 
        count: "61"
        }, 
        { 
        genre: "Horror", 
        count: "56"
        }, 
        { 
        genre: "Music", 
        count: "51"
        }, 
        { 
        genre: "New", 
        count: "63"
        }, 
        { 
        genre: "Sci-Fi", 
        count: "61"
        }, 
        { 
        genre: "Sports", 
        count: "74"
        }, 
        { 
        genre: "Travel", 
        count: "57"
        } 
]
var text = "";
  
  var width = 260;
  var height = 260;
  var thickness = 40;
  var duration = 750;
  
  var radius = Math.min(width, height) / 2;
  var color = d3.scaleOrdinal(d3.schemeCategory10);
  
  var svg = d3.select("#chart")
  .append('svg')
  .attr('class', 'pie')
  .attr('width', width)
  .attr('height', height);
  
  var g = svg.append('g')
  .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');
  
  var arc = d3.arc()
  .innerRadius(radius - thickness)
  .outerRadius(radius);
  
  var pie = d3.pie()
  .value(function(d) { return d.count; })
  .sort(null);
  
  var path = g.selectAll('path')
  .data(pie(data))
  .enter()
  .append("g")
  .on("mouseover", function(d) {
        let g = d3.select(this)
          .style("cursor", "pointer")
          .style("fill", "black")
          .append("g")
          .attr("class", "text-group");
   
        g.append("text")
          .attr("class", "name-text")
          .text(`${d.data.genre}`)
          .attr('text-anchor', 'middle')
          .attr('dy', '-1.2em');
    
        g.append("text")
          .attr("class", "value-text")
          .text(`${d.data.count}`)
          .attr('text-anchor', 'middle')
          .attr('dy', '.6em');
      })
    .on("mouseout", function(d) {
        d3.select(this)
          .style("cursor", "none")  
          .style("fill", color(this._current))
          .select(".text-group").remove();
      })
    .append('path')
    .attr('d', arc)
    .attr('fill', (d,i) => color(i))
    .on("mouseover", function(d) {
        d3.select(this)     
          .style("cursor", "pointer")
          .style("fill", "black");
      })
    .on("mouseout", function(d) {
        d3.select(this)
          .style("cursor", "none")  
          .style("fill", color(this._current));
      })
    .each(function(d, i) { this._current = i; });
  
  
  g.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '.35em')
    .text(text);