import { useState, useRef, useEffect } from 'react';

export default function useHover() {
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = useRef(null);

  useEffect(() => {
    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    hoverRef.current.addEventListener('mouseenter', onEnter);
    hoverRef.current.addEventListener('mouseleave', onLeave);
    return () => {
      hoverRef.current.removeEventListener('mouseenter', onEnter);
      hoverRef.current.removeEventListener('mouseleave', onLeave);
    };
  }, [hoverRef.current]);

  return [hoverRef, isHovering];
}
