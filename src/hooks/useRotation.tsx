import { useState, useEffect } from 'react';
import { useHoverDirty, useMouseHovered } from 'react-use';

const useRotation = (ref: React.MutableRefObject<null>): { rotationX: number; rotationY: number } => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  const { elX, elY } = useMouseHovered(ref, {
    bound: false,
    whenHovered: true,
  });

  const isHovering = useHoverDirty(ref);

  useEffect(() => {
    if (isHovering) {
      setRotationX(-((elY - 50) / 50) * 8);
      setRotationY(((elX - 50) / 50) * 8);
    } else {
      setRotationX(0);
      setRotationY(0);
    }
  }, [elX, elY, isHovering]);

  return { rotationX, rotationY };
};

export default useRotation;
