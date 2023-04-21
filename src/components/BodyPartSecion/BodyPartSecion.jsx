import {
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import fetchData from "../../utilities/api-client";
import React, { useEffect, useState } from "react";
import ExercisesCard from "../ExercisesCard/ExercisesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import bodyPartList from "../../data/bodyPartList";
import "swiper/css";
import "swiper/css/navigation";
import "./BodyPartSecion.css";
import testData from "../../data/testData";
import allExercises from '../../data/allExercises'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

export default function BodyPartSecion() {
  const [bodyPartExersices, setBodyPartExersices] = useState([]);
  const [active,setActive] = useState('back')

  useEffect(() => {
    // fetchData
    //   .get("/exercises/bodyPart/shoulders")
    //   .then((res) => setBodyPartExersices(res.data));
    setBodyPartExersices(testData);
  }, []);

  const HandleBodyPart = async (name) => {
    // console.log(name);
    // const res = await fetchData(`/exercises/bodyPart/${name}`);
    // const resSlice = await res.data.slice(0, 10);
    // setBodyPartExersices(resSlice);
    setActive(name)
    setBodyPartExersices(allExercises.filter(item=>item.bodyPart==name))

  };

  return (
    <Stack direction="row" width={"100%"} padding="50px 0px">
      <Grid container paddingX={"40px"} >
        <Grid item xs={12} md={3}  paddingBottom={{xs:'20px',md:'0px'}}>
          <Stack rowGap={"10px"} borderRight={{sm:'none' , md:"1px solid #d6d6d6"}} width={{sm:'100%',md:"90%"}} direction={{sm:'row',md:'column'}} display='flex' flexDirection={'row'} justifyContent={'space-between'}>
            <Typography fontSize={{xs:'16px',md:"26px"}} fontWeight={600} color="#6b0000">
              Body Part
            </Typography>
            <Link to={'exercises'}>
            <Typography color={"#00092c"} position={'relative'} fontSize={'12px'} display={{sm:"flex",md:'none'}}>more Exercises <NavigateNextIcon className="arrow"></NavigateNextIcon></Typography>
            </Link>
            <ul className="list-container">
              {bodyPartList.slice(0,8).map((item) => (
                <li className={`list-item ${active==item && 'active'}`} onClick={() => HandleBodyPart(item)}>
                  <ArrowForwardIosIcon className="list-arrow"></ArrowForwardIosIcon>
                 {item}
                </li>
              ))}
            </ul>
          </Stack>
        </Grid>
        <Grid item xs={12} md={9} paddingBottom='80px' borderBottom="1px solid #d3d3d3">
          <Swiper
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 3,
            },
            768: {
              width: 768,
              slidesPerView: 3,
              
            },
            992: {
              width: 992,
              slidesPerView: 4,
            },
          }}
          navigation={true}
          spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[ Navigation]}
            className="mySwiper"
          >
            {bodyPartExersices.map((item) => (
              <SwiperSlide >
                <ExercisesCard singleExercise={item}></ExercisesCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Stack>
  );
}
