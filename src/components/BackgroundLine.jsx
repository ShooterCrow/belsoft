import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const CurvedLine = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth - 60;
      canvas.height = window.innerHeight * 1.5; // Set height to 150vh

      // Draw the curved line
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
      ctx.beginPath();

      // Starting point at 100px from the top right corner and 70px from the top
      ctx.moveTo(canvas.width - 70, 80);

      // First curve (from the starting point to the next point 300px from the right and 120px from the top)
      ctx.bezierCurveTo(
        canvas.width - 100, // cp1x
        canvas.height -300, // cp1y
        canvas.width - 300, // cp2x
        10, // cp2y
        canvas.width - 300, // x
        120 // y
      );

    
      // Third curve (from the previous point to the end, 200px from the left corner and 50px from the bottom)
      ctx.bezierCurveTo(
        canvas.width - 600, // cp1x
        canvas.height - 100, // cp1y
        canvas.width - 400, // cp2x
        canvas.height - 50, // cp2y
        200, // x
        canvas.height - 50 // y
      );

      // Apply stroke style
      ctx.strokeStyle = '#8000FF';
      ctx.lineWidth = 4;
      ctx.stroke();
    };

    draw();
    window.addEventListener('resize', draw);

    return () => {
      window.removeEventListener('resize', draw);
    };
  }, []);

  return (
    <Box pos="absolute" top="0" left="0" w="full" h="full" pointerEvents="none" zIndex="-1">
      <canvas ref={canvasRef} />
    </Box>
  );
};

export default CurvedLine;
