import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

interface Capability {
  id: number;
  name: string;
}

interface ForceCircleProps {
  width?: number; // Optional width
  height?: number; // Optional height
}

const ForceCircle: React.FC<ForceCircleProps> = ({ width = 600, height = 600 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [hoveredCapability, setHoveredCapability] = useState<Capability | null>(null);

  // Define the data for the seven capabilities, ordered from inner to outer
  const capabilities: Capability[] = [
    { id: 1, name: '教育本源力' }, // Innermost
    { id: 2, name: '教育思想力' },
    { id: 3, name: '数智创新力' },
    { id: 4, name: '教学创生力' },
    { id: 5, name: '教育共信力' },
    { id: 6, name: '协同领导力' },
    { id: 7, name: '职业生命力' }, // Outermost
  ];

  // Define a color scheme for a future-tech look (can be refined later)
  const colors = [
    '#4A00B3', // Deep Purple
    '#00A3A3', // Teal
    '#00FFAA', // Neon Green
    '#FF0077', // Bright Pink
    '#FFD700', // Gold
    '#8A2BE2', // Blue Violet
    '#00FFFF', // Aqua
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    // Clear previous content
    svg.selectAll('*').remove();

    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) / 2 - 40; // Adjust max radius based on container size
    const textOffsetFromCircle = 20; // Distance of text from its corresponding circle

    // Create a group for the circles and text, centered
    const g = svg.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`);

    // Calculate radius for each circle
    const radiusScale = d3.scaleLinear()
      .domain([0, capabilities.length])
      .range([0, maxRadius]);

    // Define gradients (re-using logic from Svelte component)
    const defs = svg.append('defs');

    capabilities.forEach((capability, i) => {
      const gradient = defs.append('radialGradient')
        .attr('id', `gradient-${capability.id}`)
        .attr('cx', '50%')
        .attr('cy', '50%')
        .attr('r', '50%')
        .attr('fx', '50%')
        .attr('fy', '50%');

      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', colors[i % colors.length])
        .attr('stop-opacity', 0.8);

      gradient.append('stop')
        .attr('offset', '70%')
        .attr('stop-color', colors[i % colors.length])
        .attr('stop-opacity', 0.2);

      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', colors[i % colors.length])
        .attr('stop-opacity', 0);
    });

    // Define a glow filter (re-using logic)
    const filter = defs.append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');

    filter.append('feGaussianBlur')
      .attr('stdDeviation', '5')
      .attr('result', 'coloredBlur');

    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode')
      .attr('in', 'coloredBlur');
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');

    // --- Draw circles with sequential animation ---
    const circles = g.selectAll<SVGCircleElement, Capability>('.capability-circle')
      .data(capabilities, d => d.id.toString())
      .enter()
      .append('circle')
      .attr('class', 'capability-circle')
      .attr('r', 0)
      .attr('fill', 'none')
      .attr('stroke', (d, i) => `url(#gradient-${d.id})`)
      .attr('stroke-width', 6)
      .style('opacity', 0)
      // Add mouse events for hover effect
      .on('mouseenter', function(this: SVGCircleElement, event: MouseEvent, d: Capability) {
        d3.select(this).style('filter', 'url(#glow)').attr('stroke-width', 10);
        setHoveredCapability(d);
      })
      .on('mouseleave', function(this: SVGCircleElement, event: MouseEvent, d: Capability) {
        d3.select(this).style('filter', null).attr('stroke-width', 6);
        setHoveredCapability(null);
      });

    // Animate circles sequentially
    circles.each(function(d, i) {
      d3.select(this).transition()
        .delay(i * 500)
        .duration(1500)
        .ease(d3.easeElastic)
        .attr('r', radiusScale(i + 1))
        .style('opacity', 1);
    });

    // --- Add text labels (will also appear sequentially or after their circle) ---
    const texts = g.selectAll<SVGTextElement, Capability>('.capability-text')
      .data(capabilities, d => d.id.toString())
      .enter()
      .append('text')
      .attr('class', 'capability-text')
      .text(d => d.name)
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em') // Vertically center text
      .style('opacity', 0);

    // Position the text labels at a radius slightly larger than their circle
    texts
      .attr('x', (d: Capability, i: number) => {
        const angle = (i / capabilities.length) * 2 * Math.PI; // Evenly distribute text angularly
        const radius = radiusScale(i + 1) + textOffsetFromCircle; // Position relative to its circle
        return Math.sin(angle) * radius;
      })
      .attr('y', (d: Capability, i: number) => {
        const angle = (i / capabilities.length) * 2 * Math.PI;
        const radius = radiusScale(i + 1) + textOffsetFromCircle; // Position relative to its circle
        return -Math.cos(angle) * radius; // Adjust position for text
      });

    // Animate text appearance after their corresponding circle
    texts.each(function(d, i) {
      d3.select(this).transition()
        .delay(i * 500 + 750) // Delay based on circle animation + a bit extra
        .duration(1000)
        .ease(d3.easeLinear)
        .style('opacity', 1);
    });

    // Basic hover text display (can be more sophisticated later)
    if (hoveredCapability) {
        // This part is not directly handled by D3 selections like circles/texts,
        // it should be rendered by React based on the hoveredCapability state.
        // We will add this rendering logic in the JSX below.
    }


  }, [width, height]); // Redraw when width or height changes

  // Render the SVG and a placeholder for hover text
  return (
    <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '100vh' }}>
      <svg ref={svgRef} width={width} height={height}></svg>
      {/* Placeholder for hover text - can be styled and positioned later */}
      {hoveredCapability && (
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: '16px',
          pointerEvents: 'none', // Make text non-interactive
          // Basic positioning - will need more precise positioning based on hovered circle
          // This is just a simple example
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          {hoveredCapability.name}
        </div>
      )}
    </div>
  );
};

export default ForceCircle; 