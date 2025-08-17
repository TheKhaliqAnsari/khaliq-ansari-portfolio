import React, { useEffect, useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDotRef.current.style.left = posX + "px";
      cursorDotRef.current.style.top = posY + "px";

      //   cursorOutlineRef.current.style.left = posX + "px";
      //   cursorOutlineRef.current.style.top = posY + "px";

      cursorOutlineRef.current.animate(
        {
          left: posX + "px",
          top: posY + "px",
        },
        { duration: 1000, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
    </>
  );
};

export default Cursor;
