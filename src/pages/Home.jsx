import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import SearchExercise from "../components/SearchExercise";
import CelebrityBanner from "../components/CelebrityBanner";

const Home = () => {
  return (
    <Box>
      <CelebrityBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  );
};

export default Home;
