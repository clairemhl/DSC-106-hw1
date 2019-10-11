var svg = d3.select("svg"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin,
            radius = Math.min(width, height) / 4

var g = svg.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

    d3.csv("ucsd_cds_admission_data_2005_to_2018.csv").then(function(data){
        data.forEach(function(d) {
          d.year = +d.year;
          d["fulltime_men_applied"] = d["fulltime_men_applied"].replace(/,/g,"");
          d["fulltime_men_applied"] = +d["fulltime_men_applied"];
        });
        var year = data.map(function(d) { return d.year });
        var applied = data.map(function(d) { return d.fulltime_men_applied });
        var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);
        var pie = d3.pie();
        var arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);
        var label = d3.arc()
          .outerRadius(radius)
          .innerRadius(radius - 80);
        var arcs = g.selectAll("arc")
            .data(pie(applied))
            .enter()
            .append("g")
            .attr("class", "arc")
            
        arcs.append("path")
          .attr("fill", function(d, i) {
              return color(i);
          }).attr("d", arc);

          arcs.append("text")
          .attr("transform", function(d) { 
                   return "translate(" + label.centroid(d) + ")"; 
           })
          .text(d.year);
        });