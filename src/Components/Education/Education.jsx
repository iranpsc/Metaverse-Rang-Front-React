import { useRef, useState } from "react";

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Video from "./Video";
import { useLocation } from "react-router-dom";

const Education = ({ setOpenEducation }) => {
  const [size, setSize] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const [position, setPosition] = useState({
    x: path === "/profit" ? -200 : path === "/challenge" ? -200 : 40,
    y: 0,
  });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const draggableRef = useRef(null);
  const handleMouseDown = (e) => {
    setDragging(true);
    const offsetX = e.clientX - draggableRef.current.offsetLeft;
    const offsetY = e.clientY - draggableRef.current.offsetTop;
    setOffset({ x: offsetX, y: offsetY });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      setPosition({ x: newX, y: newY });
      e.preventDefault();
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleTouchStart = (e) => {
    setDragging(true);
    const touch = e.touches[0];
    const offsetX = touch.clientX - draggableRef.current.offsetLeft;
    const offsetY = touch.clientY - draggableRef.current.offsetTop;
    setOffset({ x: offsetX, y: offsetY });
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const { clientX, clientY } = e.touches[0];
      setPosition({
        x: clientX - offset.x,
        y: clientY - offset.y,
      });
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  const style = {
    backgroundColor: "#1A1A18",
    borderRadius: "10px",
    padding: `${size ? "0" : "15px 20px 8px 20px"}`,
    zIndex: "999",
    position: "absolute",
    top: position.y,
    left: position.x,
    width: "550px",
    cursor: dragging ? "grabbing" : "grab",
  };

  return (
    <div
      style={style}
      ref={draggableRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {!size && (
        <Header
          show={show}
          setSize={setSize}
          setOpenEducation={setOpenEducation}
        />
      )}
      <Video setSize={setSize} size={size} show={show} />
      {!size && (
        <>
          <Content show={show} setShow={setShow} />
          <Footer show={show} />
        </>
      )}
    </div>
  );
};

export default Education;
