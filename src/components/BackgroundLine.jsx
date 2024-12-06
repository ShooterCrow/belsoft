import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const CurvedLine = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Set canvas dimensions to fill the viewport
      canvas.width = window.innerWidth - 50;
      canvas.height = window.innerHeight * 2;

      // Clear canvas before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      // First Curve - Starting point
      const startX = canvas.width - 70;
      const startY = 50;

      // First Curve - End point
      const endX = canvas.width - canvas.width * 0.4;
      const endY = canvas.height/2;

      // First Curve - Control points
      const cp1x = startX + (1 * (endX - startX));
      const cp1y = startY + (0.4 * (endY - startY));
      const cp2x = startX + (-0.3 * (endX - startX));
      const cp2y = startY + (0.4 * (endY - startY));

      // Move to the starting point of first curve
      ctx.moveTo(startX, startY);

      // Draw the first Bézier curve
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);

      // Second Curve - Starting point (end of first curve)
      const secondStartX = endX;
      const secondStartY = endY;

      // Second Curve - End point (bottom left corner)
      const secondEndX = 350;
      const secondEndY = canvas.height - 250;

      // Second Curve - Control points
      const secondCp1x = secondStartX + (0.6 * (secondEndX - secondStartX));
      const secondCp1y = secondStartY + (0.4 * (secondEndY - secondStartY));
      const secondCp2x = secondStartX + (0.3 * (secondEndX - secondStartX));
      const secondCp2y = secondStartY + (0.3 * (secondEndY - secondStartY));

      // Draw the second Bézier curve
      ctx.bezierCurveTo(secondCp1x, secondCp1y, secondCp2x, secondCp2y, secondEndX, secondEndY);

      // Apply stroke style for both curves
      ctx.strokeStyle = '#8000FF';
      ctx.lineWidth = 15;
      ctx.lineCap = "round";
      ctx.lineJoin = "round"
      ctx.stroke();
    };

    draw();
    window.addEventListener('resize', draw);

    return () => {
      window.removeEventListener('resize', draw);
    };
  }, []);

  return (
    <Box
      pos="absolute"
      left="0"
      pointerEvents="none"
      zIndex="-1"
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', top: -207, bottom:0, left: 0 }} />
    </Box>
  );
};

export default CurvedLine;