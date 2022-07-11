const dataset = [
    [32, 322],
    [23, 190]
];


const w = 500;
const h = 100;


const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)

svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("width", )
