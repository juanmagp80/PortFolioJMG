import React, { useEffect, useRef } from "react";
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa";

const icons = {
  react: FaReact,
  angular: FaAngular,
  vue: FaVuejs,
};

const MovingIcon = ({ icon, containerWidth, containerHeight }) => {
  const ref = useRef(null);
  const direction = useRef({
    x: Math.random() > 0.5 ? 1 : -1,
    y: Math.random() > 0.5 ? 1 : -1,
  });

  useEffect(() => {
    const moveIcon = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      if (rect.left < 0 || rect.right > containerWidth) {
        direction.current.x *= -1;
      }

      if (rect.top < 0 || rect.bottom > containerHeight) {
        direction.current.y *= -1;
      }

      ref.current.style.left = `${rect.left + direction.current.x}px`;
      ref.current.style.top = `${rect.top + direction.current.y}px`;

      requestAnimationFrame(moveIcon);
    };

    setTimeout(() => {
      if (ref.current) {
        ref.current.style.left = `${Math.random() * (containerWidth - 50)}px`;
        ref.current.style.top = `${Math.random() * (containerHeight - 50)}px`;

        moveIcon();
      }
    }, 0);
  }, [containerHeight, containerWidth]);

  const Icon = icons[icon];

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
      }}
    >
      <Icon size={50} />
    </div>
  );
};

export default MovingIcon;
