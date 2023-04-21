import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "./Detail.css";

export default function Detail({ exerciseDetail }) {
  const { name, bodyPart, gifUrl, target , equipment } = exerciseDetail;
const icons = [
  {
    title:'bodyPart',src:'/body-part.svg'
  },
  {
    title:'target',src:'/target.svg'
  },
  {
    title:'equipment',src:'/equipment.svg'
  },
]


  return (
    <Box
      marginTop={"80px"}
      width={"100%"}
      padding={{ xs: "0px", md: "30px 80px" }}
    >
      <Grid
        container
        direction={"row"}
        borderRadius="24px"
        boxShadow={"2px 2px 5px 8px #efefef"}
      >
        <Grid item xs={12} md={4}>
          <img src={gifUrl} alt="" className="detailed-img" />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          padding="40px"
          display={"flex"}
          justifyContent="space-between"
          flexDirection={"column"}
        >
          <Typography
            paddingBottom={{ xs: "15px", md: "0" }}
            fontSize={{ xs: "20px", md: "26px" }}
            fontWeight={600}
          >
            {name}
          </Typography>
          <Typography paddingBottom={{ xs: "15px", md: "0" }}>
            Eercises keep you strong 3/4 weight lifting is one the best
            exercises to targetyour muscles it will help you improve your mood
            and gain energy{" "}
          </Typography>
          <Stack direction="row" paddingTop={{ xs: "25px", md: "0" }} alignItems='center' justifyContent={'space-around'}>
            {icons.map(item=>
                       <Box display={'flex'} alignItems='center' justifyContent={'cetner'} >
                       <img className="svg-responsive" src={item.src} alt="" />
                     <Typography
                       fontSize={{ xs: "14px", md: "16px" }}
                       fontWeight={'500'}
                       className="detail-card-badge" 
                       paddingLeft={'5px'}>
                        {item.title}
                     </Typography>
                         </Box>
            )

            }
   
        
      
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
