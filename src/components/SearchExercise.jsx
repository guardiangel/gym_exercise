import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { fetchData, options } from "../utils/fetchData";

let BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";

const SearchExercise = () => {
  const [search, setSearch] = useState("");
  const [exercise, setExercise] = useState([]);

  const handleSubmit = async () => {
    if (search) {
      const exerciseData = await fetchData(BASE_URL, options);
      // console.log(exerciseData);
      const searchedExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.toLocaleLowerCase().includes(search) ||
          exercise.target.toLocaleLowerCase().includes(search) ||
          exercise.equipment.toLocaleLowerCase().includes(search) ||
          exercise.bodyPart.toLocaleLowerCase().includes(search)
      );

      setSearch("");
      setExercise(searchedExercise);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          style={{ height: "50px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercise..."
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "50px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercise;
