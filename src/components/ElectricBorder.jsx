import React from 'react';

const ElectricBorder = ({ 
  children, 
  color = '#5227FF', 
  speed = 4, 
  thickness = 2, 
  className = '', 
  style = {} 
}) => {
  const borderRadius = style?.borderRadius ? `${style.borderRadius}px` : '16px';

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ 
        ...style, 
        borderRadius,
        padding: thickness, // This creates the border "gap"
      }}
    >
      {/* 1. The Continuous Spinning Background */}
      <div
        className="absolute inset-0 w-[300%] h-[300%] top-[-100%] left-[-100%] pointer-events-none"
        style={{
          // This gradient has no "transparent" gaps, making the border solid
          background: `conic-gradient(
            from 0deg, 
            ${color} 0%, 
            #ff073a 25%, 
            ${color} 50%, 
            #ff073a 75%, 
            ${color} 100%
          )`,
          animation: `spin ${speed}s linear infinite`,
        }}
      />

      {/* 2. The Inner Content Mask */}
      <div 
        className="relative bg-[#0a0a0a] h-full w-full flex flex-col" 
        style={{ 
          borderRadius: `calc(${borderRadius} - ${thickness}px)`,
          // If you want padding INSIDE the card, add it here:
          padding: '2rem' 
        }}
      >
        {children}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default ElectricBorder;