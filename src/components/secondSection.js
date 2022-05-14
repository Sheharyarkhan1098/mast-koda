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
    marginTop: -150,
    background: "rgb(29,29,27)",
    borderRadius: 10,
    padding: 60,
    [theme.breakpoints.down("xs")]: {
      marginTop: -100,
    }
  },
  gridContainerItem2: {
    marginTop: -130,
    // background: "rgb(29,29,27)",
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
    marginBottom: 20,
    marginTop: 20
  },
  cardMain:{
    background: "orange !important",
    margin: 5,
    minHeight: 380,
    "&:hover": {
      backgroundColor: "white !important",
    },
  },
  cardContentCustom: {
    padding: "10px !important",
    paddingBottom: "0px !important"
  },
  cardTitle: {  
    textAlign: "center",
    margin: "10px 0",

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
    position: "absolute",
    color: "white",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
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
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{background: "white"}}>
        <Typography component="div" style={{background: "rgb(245,242,236)", width: "100%",  paddingBottom: 200}} >
          <Grid container className={classes.gridContainer}>
            <Grid container item xs={10} lg={8} className={classes.gridContainerItem}>
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
            </Grid>
            <Grid container item xs={12} lg={8} className={classes.gridContainerItem2}>
              <Grid item xs={12} md={6}>
              <Typography component="div" style={{height: "100%", padding: 50, textAlign: "center", display: "flex", justifyContent: "center", alignItems: "flex-end"}}>
              <Typography variant="h4" className={`${classes.benifitText} font`}>
                 BENIFITS OF <br /> LAZY LIONS NFT
                </Typography>
              </Typography>
            </Grid>
              <Grid item xs={12} md={6}>
              <Typography component="div">
              <img src="/campfire.webp" width="100%" />
              </Typography>
            </Grid>
            </Grid>
            <Grid container item xs={12} lg={8} className={classes.gridContainerItem2}>
              {cardData.map((obj, id) => (
              <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ minWidth: 275 }} className={classes.cardMain} onMouseEnter={() => setEnter(id)} onMouseLeave={() => setEnter("")}>
                <CardContent className={classes.cardContentCustom}>
                  <Typography variant="h5" component="div" className={classes.cardTitle}>
                    Be part of the world’s loudest NFT community
                  </Typography>
                  <Typography sx={{ mb: 1.5 }}  className={classes.cardTitle}>
                   <ArrowDownward />
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} className={classes.cardImg} style={{display: id === enter ? "none" : "block"}}>
                   <img src="/community.webp" width="100%" />
                  </Typography>
                  <Typography variant="body2"  className={classes.cardBody} style={{display: id !== enter ? "none" : "block"}}>
                  When you join the Lazy Lions - by purchasing an NFT or just joining our Discord - you’re instantly part of our community. A global community that empowers and supports each other on this exciting journey into Web 3.0. We’re focused on building authentic connections as we delve into the metaverse together.
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
                    <Typography variant="h2" className={`${classes.videoCaption} font`}>
                      We are coming <br />
                      To Change Everything
                    </Typography>
                </Typography>
                <video src="/glitch.webm" width="100%" autoplay="true" loop muted="true"/>
                </Typography>
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
            <Grid container item xs={12} lg={9} className={classes.gridContainerItem3} >
            <Typography component="div" style={{paddingTop: 80}} >
              <img src="/roadmap.webp" width="100%" />
            </Typography>
            </Grid>
          </Grid>
        </Typography>
       
      </Container>

    </React.Fragment>
  );
}

export default TopSection;
