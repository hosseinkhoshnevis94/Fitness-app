import Grid from '@mui/material/Grid';
import React, { useState } from "react";
import SearchExercises from "../../components/SearchExercises/SearchExercises";
import SearchResult from "../../components/SearchResult/SearchResult";
import { ExercisesContext } from "../../context/ExerciseContext";

export default function Exercises() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [exercisesResult, setExercisesResult] = useState([]);
  return (
    <Grid container>
      <ExercisesContext.Provider
        value={{
          searchInputValue,
          setSearchInputValue,
          exercisesResult,
          setExercisesResult,
        }}
      >
        <SearchExercises></SearchExercises>
        <SearchResult></SearchResult>
      </ExercisesContext.Provider>
    </Grid>
  );
}
