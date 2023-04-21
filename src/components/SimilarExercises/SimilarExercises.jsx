import React from 'react'
import './SimilarExercises.css'
import { Grid, Stack, Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ExercisesCard from '../ExercisesCard/ExercisesCard';
import allExercises from '../../data/allExercises';
import testData from '../../data/testData';

export default function SimilarExercises() {
  console.log(testData);
  return (
    <Stack
    marginTop={"80px"}
    // width={"100vw"}
    overflow='hidden'
    padding={{ xs: "30px", md: "30px 80px" }}
  >
    <Grid
      container
      direction={"row"}
      borderRadius="24px"
      paddingBottom={{ xs: "15px", md: "0" }}
            fontSize={{ xs: "20px", md: "26px" }}
            fontWeight={600}
    >
      <Grid xs={12} item> 
      <Typography as={'span'} color={'black'} fontSize={'18px'} fontWeight='400'>
        
      Similar <Typography fontSize={'18px'} fontWeight='400' as={'span'} color={'red'}>Target Muscle</Typography> exercises
      </Typography>
      
      </Grid>
      <Grid item xs={12}  marginTop={'40px'}>
      <Swiper 
       breakpoints={{
        400: {
          width: 400,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
          
        },
        992: {
          width: 992,
          slidesPerView: 4,
        },
      }}
      navigation={true} modules={[Navigation]} className="mySwiper">
        {testData.map((item)=><SwiperSlide className='swiper-slide'>  <ExercisesCard singleExercise={item}></ExercisesCard> </SwiperSlide>)
      }
   
      </Swiper>
      </Grid>
     
    </Grid>
  </Stack> 
  )
}
