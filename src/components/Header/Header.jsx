import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <>
      <Grid
        height={"80vh"}
        item
        xs={6}
        paddingLeft={{ xs: "20px", md: "80px" }}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"flex-start"}

      >
        <Stack
          paddingTop={"30px"}
          height={"100vh"}
          direction="column"
          justifyContent={"flex-start"}
          rowGap="10px"

        >
          <Typography
            component="h1"
            fontSize={"50px"}
            letterSpacing={"8px"}
            fontWeight="700"
            color={"#6b0000"}
            className="fit-app"
          >
            FitApp
          </Typography>
          <Typography color={"#6b0000"} fontSize={"20px"} fontWeight="500">
            Sweat, Smile And <br />
            Repeat
          </Typography>
          <Typography
            display={{ xs: "none", sm: "none", md: "block" }}
            fontSize={"16px"}
            fontWeight="400"
            color={"#636363"}
            paddingTop={"30px"}
          >
            in here we will help you to shape and build your ideal body and live{" "}
            <br />
            up your live to the fullest{" "}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            justifyContent={"space-between"}
            align-items="center"
            color={"#797979"}
            rowGap="10px"
            paddingTop={{xs:'40px',md:'0px'}}
          >
            <Stack
              direction="column"
              justifyContent={"center"}
              align-items={"center"}
            >
              <Typography fontSize={"14px"} fontWeight="400">
                +140
              </Typography>
              <Typography fontSize={"14px"} fontWeight="400">
                Expert Coach
              </Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent={"center"}
              align-items="center"
            >
              <Typography fontSize={"14px"} fontWeight="400">
                +1300
              </Typography>
              <Typography fontSize={"14px"} fontWeight="400">
                Members Joined
              </Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent={"center"}
              align-items="center"
            >
              <Typography fontSize={"14px"} fontWeight="400">
                +50
              </Typography>
              <Typography fontSize={"14px"} fontWeight="400">
                Fitness Program
              </Typography>
            </Stack>
          </Stack>
          <Typography
            fontSize={"16px"}
            fontWeight="400"
            color={"#636363"}
            display={{ xs: "none", sm: "none", md: "block" }}
          >
            Check out the most effective exercises personalized to you
          </Typography>
          <Stack
            paddingTop={{xs:'0px',md:'40px'}}
            direction={{ xs: "column", sm: "column", md: "row" }}
            justifyContent={"flex-start"}
            columnGap="15px"
            align-items="center"
          >
            <Link to={"exercises"} className="header-btn">
              Explore exercises
            </Link>
            <Link to={"about"} className="header-btn-outline">
              Learn more
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6} position="relative" className="img-conainer">
        <img className="header-img" src="header-pic.png" alt="" />
        <img className="header-img-2" src="header-bg2.png" alt="" />
        <img className="header-bg" src="header-bg.png" alt="" />
      </Grid>
    </>
  );
}
