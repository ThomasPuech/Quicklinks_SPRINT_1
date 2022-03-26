import { useState } from "react";
import styled from "styled-components";

// Before Hover
const Link = styled.div`
  background-color: #ebfbff;
  border-radius: 500px;
  width: fit-content;
  height: fit-content;
  margin-right: 10px;
  margin-bottom: 5px;

  /* width: fit-content; */
  /* flex-basis: auto; */
`;

// After Hover
const LinkHover = styled.div`
  background-color: #ebfbff;
  border-radius: 500px;
  outline: 1px solid blue;
  height: fit-content;
  width: fit-content;
  margin-right: 10px;
  margin-bottom: 5px;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  /* width: fit-content; */
  /* flex-basis: auto; */
`;

const LinkTitle = styled.p`
  vertical-align: middle;
  display: inline-block;
  font-size: 13px;
  margin-left: 5px;
  margin-right: 10px;
  margin-top: auto;
  height: 0px;

  /* padding-bottom: 20px; */
`;

const Favicon = styled.img`
  /* display: inline-block; */
  /* :hover {
    outline: 1px solid blue;
  } */
  vertical-align: middle;
  display: inline-block;
  margin-left: 0px;
  border-radius: 27px;
  height: 27px;
`;

const LinkEl = (props) => {
  const [hover, setHover] = useState(false);

  function time() {
    setTimeout(() => setHover((current) => !current), 800);
  }

  function toggleHoverOff(e) {
    clearTimeout(time);
    setHover(false);
  }

  function toggleHover(e) {
    time();
  }

  // Before Hover
  if (hover === false) {
    return (
      <Link onMouseEnter={toggleHover} onMouseLeave={toggleHoverOff}>
        <Favicon src="https://perishablepress.com/wp/wp-content/images/2021/favicon-standard.png" />
        <LinkTitle>offevkflwmekfewv</LinkTitle>
      </Link>
    );
  }
  // After hover
  return (
    <LinkHover onMouseLeave={toggleHoverOff}>
      <Favicon src="https://perishablepress.com/wp/wp-content/images/2021/favicon-standard.png" />
      <LinkTitle>offevkflwmekfewv</LinkTitle>
    </LinkHover>
  );
};

export default LinkEl;
