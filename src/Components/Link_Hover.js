import { useState } from "react";
import styled from "styled-components";

const Link = styled.div`
  background-color: #ebfbff;
  border-radius: 500px;
  width: 133px;
  height: 27px;
`;

const LinkHover = styled.div`
  background-color: red;
  border-radius: 500px;
  width: 133px;
  height: 27px;
  transition: 1s background-color;
  :hover {
    background-color: red;
    transition-delay: 1s;
  }
  /* animation-iteration-count: 1;
  animation-direction: alternate-reverse;
  animation-fill-mode: forwards; */
  /* transition-delay: 1s; */
  /* animation: 0.5s mymove;
  @keyframes mymove {
    from {
      height: 27px;
    }
    to {
      height: 270px;
    }
  } */
`;

const LinkEl = (props) => {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover((current) => !current);
  }

  if (hover === false) {
    return (
      <Link onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        off
      </Link>
    );
  }
  return (
    <LinkHover onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      on
    </LinkHover>
  );
};

export default LinkEl;
