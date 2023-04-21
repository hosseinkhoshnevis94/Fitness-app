import { Grid, Stack } from "@mui/material";
import React from "react";
import "./Brands.css";

export default function Brands() {
  return (
    <Grid sm={12}    display={{xs:'none', md:"flex"}} height="200px" backgroundColor={'white'}>
      <Stack
      
      flexDirection={{xs:'column', md:"row"}}
        dirction={{xs:'column', md:"row"}}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingX={'150px'}
        width='100%'
       
        
        
      >
<img src="brand-1.png" alt=""  />
<img src="brand-2.png" alt="" />
<img src="brand-3.png" alt="" />
<img src="brand-4.png" alt="" />




      </Stack>
    </Grid>
  );
}
