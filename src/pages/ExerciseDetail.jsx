import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { options, fetchData, youtubeVideoOPtions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercise from "../components/SimilarExercise";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetExercises, setTargetExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const youtubeSearch =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetail = await fetchData(
        `${exerciseDbUrl}/exercise/${id}`,
        options
      );

      setExerciseDetail(exerciseDetail);

      const exerciseVideoData = await fetchData(
        `${youtubeSearch}/search?query=${exerciseDetail.name}`,
        youtubeVideoOPtions
      );

      setExerciseVideos(exerciseVideoData.contents);

      const targetExerciseData = await fetchData(
        `${exerciseDbUrl}/target/${exerciseDetail.target}`,
        options
      );
      setTargetExercises(targetExerciseData);

      const equipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/equipment/${exerciseDetail.equipment}`,
        options
      );

      setEquipmentExercises(equipmentExerciseData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercise
        targetExercises={targetExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
