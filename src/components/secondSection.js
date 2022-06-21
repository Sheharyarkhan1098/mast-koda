import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowDownward from '@material-ui/icons/ArrowDownward';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius: 50,
    marginTop: 20,
    border: "1px solid #025e89",
    backgroundColor: "#0094d8",
    color: "white",
    "&:hover": {
      backgroundColor: "#86e3f8",
      color: "#025e89",
    },
  },
  img: {
    maxHeight: "90%",
  },
  h2: {
    marginBottom: 50,
    fontWeight: "800",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  body1: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  body2: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  discordButton: {
    textAlign: "center",
  },
  banner: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
   
  },
  gridContainerItem: {
    // marginTop: -150,
    background: "rgb(29,29,27)",
    borderRadius: 10,
    padding: 60,
    [theme.breakpoints.down("xs")]: {
      marginTop: -100,
    }
  },
  gridContainerItem2: {
    // marginTop: -130,
    // background: "rgb(29,29,27)",
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    padding: 60,
    marginBottom: 50,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: -100,
    },
  },
  gridContainerItem3: {
    display: "flex",
    justifyContent: "center",
  },
  gridItemContent: {
    color: "white",
    maxWidth: "450px",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  marginCustom: {
    marginBottom: 20
  },
  benifitText: {
    // marginBottom: 20,
    marginTop: 0,
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
    },
  },
  cardMain:{
    background: "rgb(17,126,178) !important",
    margin: 5,
    minHeight: 380,
    "&:hover": {
      backgroundColor: "rgb(7,59,106) !important",
    },
  },
  cardContentCustom: {
    padding: "10px !important",
    paddingBottom: "0px !important",
    color: "white"
  },
  cardTitle: {  
    textAlign: "center",
    margin: "10px 0",
    textTransform: "uppercase"

  },
  cardImg: {

  },
  cardBody: {
    display: "none",
    paddingBottom: 20
  }, 
  videoContainer: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0
  }, 
  videoCaption: {
    marginTop: 50,
    textAlign: "center",
    // position: "absolute",
    color: "rgb(7,59,106)",
    textShadow: "10px 0px 10px white",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  captionContainer: {
    display: "flex",
    justifyContent: "center",
  }
}));

function TopSection() {
  const classes = useStyles();
  const [enter, setEnter] = useState("");

  const cardData = [
    {
      title: "Be part of the Thriving Artistic NFT community",
      des: "As you join Masta Koda - by purchasing an NFT or just joining our Discord - you’re instantly part of our Club. A global community that has the drive to thrive in NFTs, ART, Gaming and the Metaverse. We’re focused on growing with each season and form real relationships as we dive into the Metaverse.",
      imageSrc: "campfire.png"
    },
    {
      title: "PawsPerks",
      des: "Being a Masta Koda NFT holder, you automatically gain access to our exclusive Paws program which rewards you for participating in the community. Our program will continuously evolve as we grow with our community.",
      imageSrc: "Monthly Awards.png"
    },
    {
      title: "Enjoy the Metaverse with us",
      des: "We at The Masta Koda Street Club are committed to learning and growing in the metaverse. By joining, you will have access to every metaverse we enter. For Masta Koda Holders there will be perks as we grow our Metaverse Land footprint.",
      imageSrc: "Exclusive Games.png"
    },
    {
      title: "Be part of the project",
      des: "Masta Koda lets you be part of development and success of the project through AMAs with the development team and founders through discord and other platforms.",
      imageSrc: "Explore the Metaverse with the Kodas.png"
    },
    {
      title: "Grow your Network",
      des: "When you join The Masta Koda Street Club you also join a Global Community of like minded individuals from different walks of life. Our community is full of individuals who love to connect and welcome newcomers in our Discord!",
      imageSrc: "Expand your network.png"
    },
    {
      title: "Get Airdrops",
      des: "Being a Masta Koda NFT holder, you'll be eligible for coming airdrops of tokens, merchs and other perks.",
      imageSrc: "Receive Airdrops.png"
    },
    {
      title: "GIVING A HAND, TO SHOW THAT WE CARE",
      des: "The Masta Koda Street Club is dedicated to helping others. We have partnered with the GROWING OF FUTURE FOUNDATION in Thailand, a non-profit organization aimed at helping children who were abandoned by their parents due to drugs and abuse. Every Masta Koda will help these children in need and will lead them to a brighter future",
      imageSrc: "campfire.png"
    },
  ]
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{background: "white"}}>
        <Typography component="div" style={{background: "#a2d1f6", width: "100%",}} >
          <Grid container className={classes.gridContainer}>
            {/* <Grid container item xs={10} lg={8} className={classes.gridContainerItem}>
              <Grid item xs={12} sm={4}>
                <Typography component="div" className={classes.gridItemContent}>
                <Typography variant="h3" className={classes.marginCustom}>
                <img src="/logo-dark.svg" width="70px" />
                </Typography>
                <Typography variant="h3" className={`${classes.marginCustom} font`}>
                 147k
                </Typography>
                <Typography variant="h4" className={classes.marginCustom}>
                Discord <br /> Members
                </Typography>
                </Typography>
              </Grid>
             <Grid item xs={12} sm={4}>
                <Typography component="div" className={classes.gridItemContent}>
                <Typography variant="h3" className={classes.marginCustom}>
                <img src="/logo-dark.svg" width="70px" />
                </Typography>
                <Typography variant="h3" className={`${classes.marginCustom} font`}>
                 147k
                </Typography>
                <Typography variant="h4" className={classes.marginCustom}>
                Discord <br /> Members
                </Typography>
                </Typography>
              </Grid>
             <Grid item xs={12} sm={4}>
                <Typography component="div" className={classes.gridItemContent}>
                <Typography variant="h3" className={classes.marginCustom}>
                <img src="/logo-dark.svg" width="70px" />
                </Typography>
                <Typography variant="h3" className={`${classes.marginCustom} font`}>
                 147k
                </Typography>
                <Typography variant="h4" className={classes.marginCustom}>
                Discord <br /> Members
                </Typography>
                </Typography>
              </Grid>
            </Grid> */}
            <Grid container item xs={12} lg={8} className={classes.gridContainerItem2}>
              <Grid item xs={12} md={6}>
              <Typography component="div" style={{height: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Typography variant="h4" className={`${classes.benifitText} font`}>
              Masta Koda Benefits
                </Typography>
              </Typography>
            </Grid>
              <Grid item xs={12} md={6}>
              <Typography component="div">
              <img src="/campfire.png" width="100%" />
              </Typography>
            </Grid>
            </Grid>
            <Grid id="roadmap" container item xs={12} md={10} lg={8} className={classes.gridContainerItem2}>
              {cardData.map((obj, id) => (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
              <Card sx={{ minWidth: 275, height: 350 }} className={classes.cardMain} onMouseEnter={() => setEnter(id)} onMouseLeave={() => setEnter("")}>
                <CardContent className={classes.cardContentCustom}>
                  <Typography variant="h5" component="div" className={classes.cardTitle}>
                    {obj.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }}  className={classes.cardTitle}>
                   <ArrowDownward />
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} className={classes.cardImg} style={{display: id === enter ? "none" : "block"}}>
                   <img src={obj.imageSrc} width="100%" />
                  </Typography>
                  <Typography variant="body2"  className={classes.cardBody} style={{display: id !== enter ? "none" : "block"}}>
                  {obj.des}
                  </Typography>
                </CardContent>
              </Card>
              </Grid>
              ))}
            </Grid>
          <Grid container item xs={12} lg={9} className={classes.gridContainerItem3} >
              <Grid item xs={12}>
                <Typography component="div" className={classes.videoContainer}>
                  <Typography component="span" className={classes.captionContainer}>
                    <Typography variant="h4" className={`${classes.videoCaption} font`}>
                    This is just the beginning… <br />
                    Join us and become a Masta Koda!
                    </Typography>
                </Typography>
                {/* <img src="lower.png" width="100%" /> */}
                {/* <video src="https://www.youtube.com/embed/ouIFDxQR_Qs" width="100%" autoplay="true" loop muted="true"/> */}
                
                </Typography>
              </Grid>
              {/* <Grid item xs={12}>
                <Typography component="div" style={{background: "rgb(188,158,101)", marginTop: -10, padding: 20, minHeight: 350, display: "flex", justifyContent: "center", flexDirection: "column"}}>
                  <Typography component="span" style={{display: "flex", justifyContent: "center"}} >
                    <Typography variant="h2" className={"font"} style={{color: "white", textAlign: "center"}} >
                    Lazy lions in the Metaverse
                    </Typography>
                </Typography>
                <Typography component="span" style={{display: "flex", justifyContent: "space-around", padding: 20}} >
                    <Button variant="contained" color="secondary" > Button 1</Button>
                    <Button variant="contained" color="secondary"> Button 2</Button>
                    <Button variant="contained" color="secondary"> Button 3</Button>
                </Typography>
                </Typography>
              </Grid> */}
            </Grid>
            <Grid container item xs={12} lg={9} className={classes.gridContainerItem3} >
            <Typography component="div" style={{paddingTop: 80}} >
              <img src="/lower.png" width="100%" />
            </Typography>
            
            </Grid>
          </Grid>
            <Typography component="div" style={{background: "rgb(17 126 178)",display: "flex", justifyContent: "center", }}>
                  <Typography component="span" style={{display: "flex", justifyContent: "center"}} >
                    <Typography variant="body1" style={{color: "white", textAlign: "center"}} >
                    © Masta Koda Street Club 2022
                    </Typography>
                </Typography>
            </Typography>
        </Typography>
       
      </Container>

    </React.Fragment>
  );
}

export default TopSection;
