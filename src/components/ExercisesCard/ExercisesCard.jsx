import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './ExercisesCard.css'
export default function ExercisesCard({singleExercise}) {
console.log(singleExercise);


  return (
    (singleExercise &&
    <Link to={`/exercise/${singleExercise.id}`}>
    <Card className='card-container' >
      <CardActionArea >
        <CardMedia 
        objectFit="contain"
          component="img"
          height="auto"
          image={singleExercise.gifUrl}
          alt={`${singleExercise.target} ${singleExercise.bodyPart} ${singleExercise.target} `}
        />
        <CardContent  height="100" >
          <Typography gutterBottom fontSize={'17px'} fontWeight='500' variant="h5" component="div">
            {singleExercise.name}
          </Typography>
          <Stack direction={'row'}  justifyContent='flex-start' columnGap={'5px'} paddingY={'15px'}>
          <Typography className='card-badge'  backgroundColor="#DC0000" variant="body2" >
          {singleExercise.bodyPart}
          </Typography>
          <Typography className='card-badge' backgroundColor="#00092c" variant="body2" >
          {singleExercise.target}
          </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    )
  )
}
