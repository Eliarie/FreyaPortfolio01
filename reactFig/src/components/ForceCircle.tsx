import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

interface Capability {
  id: number;
  name: string;
  startOffset: string; // Add startOffset for text positioning
}

interface ForceCircleProps {
  width?: number;
  height?: number;
}

const ForceCircle: React.FC<ForceCircleProps> = ({ width = 600, height = 600 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [hoveredCapability, setHoveredCapability] = useState<Capability | null>(null);

  // Define the exact spiral path data from the provided HTML
  const spiralPathData = "M250 250 L231.2 250 L221.8 268.8 L240.6 278.2 L259.4 268.8 L269 250 L259.4 231.2 L240.6 221.8 L221.8 231.2 L212.4 250 L221.8 268.8 L240.6 287.6 L259.4 297 L278.4 287.6 L288 268.8 L297.2 250 L288 231.2 L278.4 212.4 L259.4 203 L240.6 193.6 L221.8 175 L202.6 184.2 L193.6 193.6 L184.2 212.4 L175 231.2 L165.6 250 L175 268.8 L184.2 287.6 L193.6 306.2 L202.6 325 L221.8 334.4 L240.6 343.8 L259.4 353.2 L278.4 343.8 L297.2 334.4 L315.8 325 L325.2 306.2 L334.6 287.6 L343.4 268.8 L352.6 250 L343.4 231.2 L334.6 212.4 L325.2 193.6 L315.8 175 L297.2 165.6 L278.4 156.2 L259.4 147 L240.6 137.6 L221.8 147 L202.6 156.2 L193.6 165.6 L175 184.2 L165.6 203 L156.2 212.4 L147.2 184.2 L137.8 250 L147.2 268.8 L156.2 287.6 L165.6 306.2 L175 325 L184.2 343.8 L193.6 353.2 L202.6 371.8 L221.8 381.2 L240.6 390.6 L259.4 400 L278.4 390.6 L297.2 400 L315.8 390.6 L334.6 381.2 L343.4 371.8 L352.6 353.2 L362 343.8 L371.4 325 L380.6 306.2 L390 287.6 L399.4 268.8 L408.8 250";

  // Define the data for the seven capabilities, ordered and with startOffsets from the HTML
  const capabilities: Capability[] = [
    { id: 1, name: '教育本源力', startOffset: '1.5%' },
    { id: 2, name: '教育思想力', startOffset: '6.5%' },
    { id: 3, name: '教学创生力', startOffset: '13%' },
    { id: 4, name: '协同领导力', startOffset: '22%' },
    { id: 5, name: '职业生命力', startOffset: '33%' },
    { id: 6, name: '教育共信力', startOffset: '48%' },
    { id: 7, name: '数智创生力', startOffset: '66%' },
  ];

  // Define colors based on the HTML's glow colors for hover effects
  const colors = [
    'rgba(157, 192, 255, 0.9)', // glow-1: 本源力
    'rgba(179, 255, 208, 0.9)', // glow-2: 思想力
    'rgba(255, 179, 219, 0.9)', // glow-3: 创生力
    'rgba(255, 224, 179, 0.9)', // glow-4: 领导力
    'rgba(179, 229, 255, 0.9)', // glow-5: 生命力
    'rgba(255, 200, 179, 0.9)', // glow-6: 共信力
    'rgba(200, 179, 255, 0.9)', // glow-7: 数智力
  ];

  useEffect(() => {
    if (!svgRef.current) {
      console.log('SVG ref is null, returning.');
      return;
    }

    console.log('--- Debugging SVG Element ---');
    console.log('SVG ref current:', svgRef.current);
    const svg = d3.select(svgRef.current)
      .attr('width', '95vmin') // Match CSS sizing
      .attr('height', '95vmin') // Match CSS sizing
      .attr('viewBox', '0 0 500 500'); // Set viewBox as in HTML

    console.log('SVG element after D3 selection:', svg.node());
    console.log('SVG width:', svg.attr('width'));
    console.log('SVG height:', svg.attr('height'));
    console.log('SVG viewBox:', svg.attr('viewBox'));

    svg.selectAll('*').remove();

    // Append defs for the spiral path (still needed for textPath)
    const defs = svg.append('defs');
    defs.append('path')
      .attr('id', 'spiral-path')
      .attr('d', spiralPathData);

    console.log('Path data defined in defs (spiral-path):', spiralPathData);

    // Draw the spiral path outline directly
    const displayedPath = svg.append('path')
      .attr('d', spiralPathData)
      .attr('id', 'displayed-spiral-path')
      .style('fill', 'none')
      .style('stroke', 'black') // 将螺旋线颜色改为黑色
      .style('stroke-width', '1.5px')
      .style('stroke-linecap', 'round')
      .style('stroke-linejoin', 'round')
      .style('opacity', 0)
      .transition()
      .duration(1500)
      .style('opacity', 1);

    console.log('Displayed path element:', displayedPath.node());
    console.log('Displayed path d attribute:', displayedPath.attr('d'));
    console.log('Displayed path stroke:', displayedPath.style('stroke'));
    console.log('Displayed path stroke-width:', displayedPath.style('stroke-width'));
    console.log('--- End Debugging SVG Element ---');

    // Add text labels
    const textGroup = svg.append('g');

    capabilities.forEach((capability, i) => {
      const link = textGroup.append('a')
        .attr('xlink:href', '#')
        .style('--glow-color', colors[i]); // Set CSS variable for glow

      link.append('text')
        .attr('class', 'force-text-path')
        .style('fill', 'black') // 将文本颜色改为黑色
        .style('font-size', '17px')
        .style('font-weight', '300')
        .style('letter-spacing', '4px')
        .style('opacity', 0)
        .append('textPath')
        .attr('xlink:href', '#spiral-path') // textPath still references the defs path
        .attr('startOffset', capability.startOffset)
        .text(capability.name);

      // Animate text appearance
      link.select('text').transition()
        .delay(i * 100 + 750)
        .duration(1000)
        .style('opacity', 1);

      // Add hover effects manually for D3 elements
      link.on('mouseenter', function() {
        d3.select(this).select('text')
          .style('fill', '#ffffff') // 悬停时文本颜色保持白色，与黑色背景对比
          .style('font-weight', '500')
          .style('filter', `drop-shadow(0 0 5px ${colors[i]})`); // Use the glow color
        setHoveredCapability(capability);
      })
      .on('mouseleave', function() {
        d3.select(this).select('text')
          .style('fill', 'black') // 鼠标移开时恢复黑色
          .style('font-weight', '300')
          .style('filter', null);
        setHoveredCapability(null);
      });
    });

  }, [width, height, capabilities]);

  return (
    <div style={{
      backgroundColor: 'white', // 将背景颜色改为白色
      backgroundImage: 'none', // 移除背景图片，避免干扰
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      <svg ref={svgRef}></svg>
      {/* This part was for displaying hovered text using React state,
          but the D3.js hover effects now handle the visual feedback directly on the text.
          You can remove this div if it's not needed for other purposes. */}
      {hoveredCapability && (
        <div style={{
          position: 'absolute',
          color: 'black', // 将悬停文本颜色改为黑色
          fontSize: '16px',
          pointerEvents: 'none',
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