import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
// import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import fetchExercises from "../../utilities/api-client";
import "./SearchExercises.css";
import { ExercisesContext } from "../../context/ExerciseContext";
import allExercises from "../../data/allExercises";

export default function SearchExercises() {
  const { searchInputValue, setSearchInputValue, setExercisesResult } =
    useContext(ExercisesContext);

  // const HandleSearch =  () => {
  //   const data = await fetchExercises.get("/exercises/bodyPartList");
  //   const filteredData = await data.data.filter(
  //     (item) =>
  //       item.bodyPart.toLowerCase().includes(searchInputValue) ||
  //       item.equipment.toLowerCase().includes(searchInputValue) ||
  //       item.name.toLowerCase().includes(searchInputValue) ||
  //       item.target.toLowerCase().includes(searchInputValue)
  //   );
  //   setSearchInputValue('')
  //   setExercises(filteredData);

  //   axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',{headers:{
  //     'X-RapidAPI-Key': '5d11cc1328mshd8c3431b581c7c7p13e601jsnd429689f901f',
  //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  //   }})
  //   axios.get('https://exerciseapi3.p.rapidapi.com/search/muscles/',{headers:{
  //     'X-RapidAPI-Key': '5d11cc1328mshd8c3431b581c7c7p13e601jsnd429689f901f',
  //     'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
  //   }})
  // };

  const HandleSearch = () => {
    setExercisesResult(
      allExercises.filter(
        (item) =>
          item.bodyPart.includes(searchInputValue) ||
          item.equipment.includes(searchInputValue) ||
          item.target.includes(searchInputValue) ||
          item.name.includes(searchInputValue)
      )
    );
    window.scrollTo({top:550 , behavior:"smooth"})
    setSearchInputValue("");
  };
  return (
    <>
      <Grid
        item
        xs={12}
        paddingTop="100px"
        paddingX={{ xs: "20px", md: "80px" }}
        display="flex"
        flexDirection={"column"}
        justifyContent="flex-start"
        alignItems={"center"}
      >
        <Typography fontSize={"24px"} fontWeight="700" color={"#6b0000"}>
          Build Your Best Body{" "}
        </Typography>
        <Typography fontSize={"16px"} paddingTop="15px" color={"#8a8a8a"}>
          Awesome Exercises You Should Know
        </Typography>
        <Stack
          direction="row"
          position="relative"
          marginY={"50px"}
          width="70vw"
        >
          <TextField
            size="small"
            fullWidth
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
          <button
            onClick={HandleSearch}
            position="absolute"
            rigth="0"
            top="0"
            variant="contained"
            className="search-btn"
            sx={{ backgroundColor: "#6b0000" }}
          >
            Search
          </button>
        </Stack>
      </Grid>
    </>
  );
}
