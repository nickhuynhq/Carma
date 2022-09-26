import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./TreeMap.scss"

export default function Treemap({ data, width, height }) {
  const svgRef = useRef(null);

  function renderTreemap() {
    const svg = d3.select(svgRef.current);

    // Make svg responsive to viewbox
    svg.attr("viewBox", `0 0 1000 400`);

    const root = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);

    const treemapRoot = d3.treemap().size([width, height]).padding(4)(root);

    const nodes = svg
      .selectAll("g")
      .data(treemapRoot.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`)
      .on("click", function (d, i) {
        window.location.hash = i.data.name;
      })
      .on('mouseover', function(d){
        d3.select(this).style("opacity", 0.5); 
      })
      .on('mouseout', function(d){
        d3.select(this).style("opacity", 1); 
      });

    const fader = (color) => d3.interpolateRgb(color, "#fff")(0.5);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10.map(fader));

    nodes
      .append("rect")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("fill", (d) => colorScale(d.data.name))
      .on('mouseover', function(d){
        d3.select(this).style("cursor", "pointer"); 
      })
      .on('mouseout', function(d){
        d3.select(this).style("cursor", "default"); 
      });

    const fontSize = 14;

    // add text to rects
    nodes
      .append("text")
      .text((d) => `${d.data.name} ${d.data.value}`)
      .attr("data-width", (d) => d.x1 - d.x0)
      .attr("font-size", `${fontSize}px`)
      .attr("x", 8)
      .attr("y", fontSize + 5)
      .call(wrapText);

    function wrapText(selection) {
      selection.each(function () {
        const node = d3.select(this);
        const rectWidth = +node.attr("data-width");
        let word;
        const words = node.text().split(" ").reverse();
        let line = [];
        let lineNumber = 0;
        const x = node.attr("x");
        const y = node.attr("y");
        let tspan = node.text("").append("tspan").attr("x", x).attr("y", y);
        while (words.length > 1) {
          word = words.pop();
          line.push(word);
          tspan.text(line.join(" "));
          const tspanLength = tspan.node().getComputedTextLength();
          if (tspanLength > rectWidth && line.length !== 1) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = addTspan(word);
          }
        }
        addTspan(words.pop());

        function addTspan(text) {
          lineNumber += 1;
          return node
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", `${lineNumber * fontSize}px`)
            .text(text);
        }
      });
    }
  }

  useEffect(() => {
    renderTreemap();
  }, [data]);

  return (
    <div className="treemap">
      <svg ref={svgRef} />
    </div>
  );
}
