import { Grid, Pagination } from "@mui/material";
import React, { useContext, useState } from "react";
import { ExercisesContext } from "../../context/ExerciseContext";
import ExercisesCard from "../ExercisesCard/ExercisesCard";
import "./SearchResult.css";

export default function SearchResult() {
  const { exercisesResult } = useContext(ExercisesContext);
  console.log(exercisesResult);
  const[currentPage,setCurrentPage] = useState(1)
  const itemsPerPage = 12;
  const lastItemIndex = currentPage *itemsPerPage 
  const firstItemIndex = (currentPage-1) *itemsPerPage 
const data = exercisesResult.slice(firstItemIndex,lastItemIndex)
  const handlePaginate = (e,value)=>{
    setCurrentPage(value)
    window.scrollTo({top:150 , behavior:"smooth"})
  }

  return (
    <>
      <Grid item xs={12}  width="100%">
        <Grid container spacing={2} paddingX={"50px"} direction={'row'}>
          {data.map((item) => (
            <Grid item key={item.id}  xs={12} md={3}>
              <ExercisesCard singleExercise={item}></ExercisesCard>{" "}
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          marginTop="50px"
          display={"flex"}
          justifyContent="center"
        >
         {exercisesResult.length>0 &&  <Pagination
            count={Math.floor(exercisesResult.length/itemsPerPage)}
            color="primary"
            page={currentPage}
            onChange={handlePaginate}

          />}
        </Grid>
      </Grid>
    </>
  );
}
