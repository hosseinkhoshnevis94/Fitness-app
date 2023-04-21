import { Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import EquipmentSection from "../../components/EquipmentSection/EquipmentSection";
import BodyPartSecion from "../../components/BodyPartSecion/BodyPartSecion";
import TargetMusclesSection from "../../components/TargetMusclesSection/TargetMusclesSection";
import Brands from "../../components/Brands/Brands";
import BannerSection from "../../components/BannerSection/BannerSection";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <Grid container>
      <Header></Header>
      <Brands></Brands>
      <TargetMusclesSection></TargetMusclesSection>
      <EquipmentSection></EquipmentSection>
      <BannerSection></BannerSection>
      <BodyPartSecion></BodyPartSecion>
    </Grid>
  );
}
