import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer() {
  return (
    <Grid sm={12} position='relative' marginTop={'200px'} marginBottom={{xs:'40px',md:'0px'}}>
      <img className="footer-img" src="footer-img.png" alt="" />
      <Grid rowGap={'20px'} container padding={'0px 50px 50px'} flexDirection={{sm:'row',md:'row'}} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <Grid sm={6} md={3} >
          <Stack
            direction="column"
            justifyContent={"flex-start"}
            align-items={"center"}
          >
            <Typography className="fit-app" fontSize={{xs:'30px',md:"26px"}} fontWeight="700" paddingBottom='25px' color={"#dc0000"}>
              FitApp
            </Typography>
<Stack direction="row"
            justifyContent={"flex-start"}
            align-items={"center"}
            color="white"
            columnGap={'10px'}
            >

<EmailIcon></EmailIcon> <WhatsAppIcon></WhatsAppIcon> <TelegramIcon></TelegramIcon> <InstagramIcon></InstagramIcon>
              </Stack>
          </Stack>   </Grid>
        <Grid sm={6} md={3}>
          <Stack
            direction="column"
            justifyContent={"flex-start"}
            align-items={"center"}
          >
            <Typography  fontSize={{xs:'18px',md:"26px"}} paddingBottom='25px' fontWeight="700" color={"#cccccc"}>
              Programms
            </Typography>
            <Typography fontSize={"14px"} fontWeight="400" color={"#8a8a8a"}>
              Our Programms
            </Typography>
            <Typography fontSize={"14px"} fontWeight="400" color={"#8a8a8a"}>
              Our Plans
            </Typography>
            <Typography fontSize={"14px"} fontWeight="400" color={"#8a8a8a"}>
             Become a Member
            </Typography>
          </Stack>
        </Grid>


        <Grid sm={6} md={3} display={{xs:'none',md:'block'}}>
          <Stack
            direction="column"
            justifyContent={"flex-start"}
            align-items={"center"}
          >
            <Typography  fontSize={{xs:'18px',md:"26px"}} paddingBottom='25px'  fontWeight="700" color={"#cccccc"}>
              Support
            </Typography>
            <Typography fontSize={"14px"} fontWeight="400" color={"#8a8a8a"}>
              Contact Us
            </Typography>
            <Typography fontSize={"14px"} fontWeight="400" color={"#8a8a8a"}>
              Help
            </Typography>
          </Stack>
        </Grid>
        <Grid sm={6} md={3}>
          <Stack>
            <Typography fontSize={"22px"} paddingBottom='25px' fontWeight="700" color={"#cccccc"}>Get The Latest News & Offers</Typography>
            <input type="text" placeholder="Your E-mail..." className="subscribe-input" />
            <button className="sbsc-btn">Subscribe</button>
          </Stack>
        </Grid>


      </Grid>
      
      
     

    </Grid>
  );
}
