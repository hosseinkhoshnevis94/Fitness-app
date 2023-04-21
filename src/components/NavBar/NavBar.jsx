import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import "./NavBar.css";

export default function NavBar() {
  return (
    <Stack
      padding={{xs:"20px 25px",md:"20px 50px"}}
      direction={"row"}
      spacing="10px"
      justifyContent={{ xs: "space-between", md: "space-between" }}
      alignItems="center"
      maxWidth={'100vw'}
    >
      <Stack>
        {" "}
        <Link to={'/'}>
        <img src="fitApp-logo.png" alt="" />{" "}
        </Link>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={{ sm: "space-between", md: "space-between" }}
display={{xs:'flex',sm:'flex',md:'flex'}}
columnGap={'5px'}  
className='nav-items-container'   
     >
        <NavLink className="nav-item" to={"/"}>
          Home
        </NavLink>
        <NavLink className="nav-item" to={"exercises"}>
          Exercises
        </NavLink>
        <NavLink className="nav-item" to={"services"}>
          Services
        </NavLink>
        <NavLink className="nav-item" to={"about"}>
          About
        </NavLink>
      </Stack>
      <Stack display={{xs:'none',sm:'none',md:'block'}}>
        <button className="nav-item join-btn">Join Now</button>{" "}
      </Stack>
      <Stack display={{xs:'block',sm:'block',md:'none'}} color="white" >
      {/* <MenuIcon className="hamberger-menu"></MenuIcon> */}
      </Stack>

    </Stack>
  );
}
