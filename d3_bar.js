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
        var xScale = d3.scaleLinear()
          .domain([d3.min(year), d3.max(year)])
          .range([0, width]);

        var yScale = d3.scaleLinear()
          .domain([0, d3.max(applied)])
          .range([height, 0]);

        var x_axis = d3.axisBottom()
          .scale(xScale);

        var y_axis = d3.axisLeft()
          .scale(yScale);
       

        g.append("g")
        .attr("transform", "translate(0, 0)")
        .call(y_axis);

        g.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(x_axis);
        svg.selectAll("bar")
             .data(data)
             .enter().append("rect")
             .attr("class", "bar")
             .attr("x", function(d) { return xScale(d.year)+100; })
             .attr("y", function(d) { return yScale(d.fulltime_men_applied)+100; })
             .attr("width", 20)
             .attr("height", function(d) { return height - yScale(d.fulltime_men_applied); });  
    });