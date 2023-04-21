import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ExerciseDetail.css'
import allExercises from '../../data/allExercises'
import { Grid } from '@mui/material'
import Detail from '../../components/Detail/Detail'
import SimilarExercises from '../../components/SimilarExercises/SimilarExercises'


export default function ExerciseDetail() {
const [exerciseDetail , setExerciseDetail] = useState({})

const {id} = useParams()
useEffect(()=>{
  window.scrollTo({top:150 , behavior:"smooth"})
  const exercise = allExercises.find(item=>item.id==id)
  setExerciseDetail(exercise)
},[id])


  return (
    <Grid container>
      <Detail exerciseDetail={exerciseDetail}></Detail>
      <SimilarExercises  ></SimilarExercises>


    </Grid>
  )
}
