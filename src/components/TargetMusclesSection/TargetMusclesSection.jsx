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
import { useEffect, useState } from "react";
import ExercisesCard from "../ExercisesCard/ExercisesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import targetMuscleList from "../../data/targetMuscleList";
import "swiper/css";
import "swiper/css/navigation";
import "./TargetMusclesSection.css";
import testData from "../../data/testData";
import { Link } from "react-router-dom";
import allExercises from '../../data/allExercises'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function TargetMusclesSection() {
  const [targetMuscleExersices, setTargetMuscleExersices] = useState([]);
  const [active,setActive] = useState('abductors')
  // useEffect(() => {
  // fetchData
  //   .get("/exercises/target/abductors")
  //   .then((res) => setTargetMuscleExersices(res.data));
  //   setTargetMuscleExersices(testData)
  // }, []);

  // const HandleTargetMuscle = async (name) => {
  //   console.log(name);
  //   const res = await fetchData(`/exercises/target/${name}`)
  //   const resSlice = await res.data.slice(0,10)
  //   setTargetMuscleExersices(resSlice)
  // };
  useEffect(() => {
    setTargetMuscleExersices(testData);
  }, []);
  const HandleTargetMuscle = (name) => {
    setActive(name)
    setTargetMuscleExersices( allExercises.filter(item=>item.target==name))
   
  };

  return (
    <Stack marginTop={"50px"} direction="row" width={"100%"} padding="20px 0px">
      <Grid container paddingX={"40px"} >
        <Grid item xs={12} md={3}  paddingBottom={{xs:'50px',md:'0px'}}>
          <Stack rowGap={"10px"} borderRight={{sm:'none' , md:"1px solid #d6d6d6"}} width={{sm:'100%',md:"90%"}} direction={{sm:'row',md:'column'}} display='flex' flexDirection={'row'} justifyContent={'space-between'}>
            <Typography fontSize={{xs:'16px',md:"26px"}} fontWeight={600} color="#6b0000">
              Target Muscles
            </Typography>
            <Link to={'exercises'}>
            <Typography color={"#00092c"} position={'relative'} fontSize={'12px'} display={{sm:"flex",md:'none'}}>more Exercises <NavigateNextIcon className="arrow"></NavigateNextIcon></Typography>
            </Link>
            <ul className="list-container">
              {targetMuscleList.slice(0,8).map((item) => (
                <li
                className={`list-item ${active==item && 'active'}`}
                onClick={() => HandleTargetMuscle(item)}
                >
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
          navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {targetMuscleExersices.map((item) => (
              <SwiperSlide>
                <ExercisesCard singleExercise={item}></ExercisesCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Stack>
  );
}
