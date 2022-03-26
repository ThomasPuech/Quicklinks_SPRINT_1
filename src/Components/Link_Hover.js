import { useState } from "react";
import styled from "styled-components";

const Link = styled.div`
  display: flex;
  background-color: #ebfbff;
  border-radius: 500px;
  width: 133px;
  height: 27px;
  justify-content: center;
  align-content: center;
  align-items: stretch;
`;

const LinkHover = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  background-color: #ebfbff;
  border-radius: 500px;
  outline: 2px solid blue;
  width: 133px;
  height: 27px;
  transition: 1s background-color;
  /* :hover {
    background-color: red;
    transition-delay: 1s;
  } */
  /* animation-iteration-count: 1;
  animation-direction: alternate-reverse;
  animation-fill-mode: forwards; */
  /* animation: 0.5s mymove;
  @keyframes mymove {
    from {
      height: 27px;
    }
    to {
      height: 270px;
    }
  } */
  /* transition-delay: 1s; */
`;

const LinkTitle = styled.p`
  font-size: 13px;
  align-content: center;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const Favicon = styled.img``;

const LinkEl = (props) => {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover((current) => !current);
  }

  // Before Hover
  if (hover === false) {
    return (
      <Link onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <Favicon src="https://perishablepress.com/wp/wp-content/images/2021/favicon-standard.png" />
        <LinkTitle>off</LinkTitle>
      </Link>
    );
  }
  // After hover
  return (
    <LinkHover onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Favicon src="https://perishablepress.com/wp/wp-content/images/2021/favicon-standard.png" />
      <LinkTitle>on</LinkTitle>
    </LinkHover>
  );
};

export default LinkEl;
