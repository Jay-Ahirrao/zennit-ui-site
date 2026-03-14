import React from 'react';

const ElectricBorder = ({ 
  children, 
  color = '#5227FF', 
  speed = 3, 
  thickness = 2, 
  className = '', 
  style = {} 
}) => {
  const borderRadius = style?.borderRadius ?? '12px';

  return (
    <div 
      className={`relative p-[${thickness}px] overflow-hidden ${className}`} 
      style={{ 
        ...style, 
        borderRadius,
        padding: thickness // Ensure space for the border
      }}
    >
      {/* The Animated Gradient Background */}
      <div
        className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${color}, transparent 25%, transparent 50%, ${color}, transparent 75%)`,
          animation: `spin ${speed}s linear infinite`,
          borderRadius: '50%', // Round for smooth spinning
        }}
      />

      {/* The "Inner" Content Mask */}
      <div 
        className="relative bg-black h-full w-full" 
        style={{ borderRadius: `calc(${borderRadius} - ${thickness}px)` }}
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