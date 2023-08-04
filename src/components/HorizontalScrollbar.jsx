import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography, Stack, Button } from "@mui/material";
import "react-horizontal-scrolling-menu/dist/styles.css";

import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";

/* let LeftArrow = () => {
  //const { scrollPrev } = React.useContext(VisibilityContext);
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

let RightArrow = () => {
  //const { scrollNext } = React.useContext(VisibilityContext);
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
}; */

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className="right-arrow"
    >
      <img src={LeftArrowIcon} alt="right-arrow" />
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className="left-arrow"
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </button>
  );
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} data={data}>
      {data.map((item) => (
        <Box key={item.id} itemId={item.id} title={item.id}>
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
