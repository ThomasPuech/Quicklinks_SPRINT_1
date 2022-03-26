import { useState } from "react";

const Link = (props) => {
  const [hover, setHover] = useState("off");

  function hoverOn() {
    setHover("on");
  }

  function hoverOff() {
    setHover("off");
  }

  if (hover === "off") {
    return (
      <div>
        <p onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          off
        </p>
      </div>
    );
  }
  return (
    <div>
      <p onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
        on
      </p>
    </div>
  );
};

export default Link;
