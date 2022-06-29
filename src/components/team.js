import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  designation: {
    textAlign: "center",
    // color: "#aaaaaa",
    color: "#a2d1f6",
  },
  name: {
    textAlign: "center",
    fontWeight: "bolder",
    // color: "#025e89",
    color: "white",
  },
  title: {
    fontWeight: "Bolder",
    textAlign: "center",
    // color: "#025e89",
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
    },
  },
  media: {
    height: 350,
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  card: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },
  icons: {
    fontSize: 20,
    margin: "0 2px",
    color: "#1e2761",
  },
}));

const faqData = [
  { name: "MatrixKing", designation: "@MatrixKingYT", img: "/matrix.png", link:"https://twitter.com/MatrixKingYT" },
  { name: "Axel Green", designation: "@AxelGreen72", img: "/axel.jpg", link:"https://twitter.com/AxelGreen72" },
  { name: "ACIII", designation: "@ACIIIart", img: "/acii.png", link:"https://twitter.com/AciiIart" },
];

function TeamCard() {
  const classes = useStyles();

  return (
    <Grid container style={{ display: "flex", justifyContent: "center" }}>
      {faqData.map((obj, key) => (
        <Grid key={key} item xs={12} md={6} lg={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={obj.img}
                title={obj.name}
              />
              <CardContent style={{background: "rgb(17 126 178)"}}> 
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.name}
                >
                  {obj.name}
                </Typography>
                
                <Typography
                  component="div"
                  style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                  >
                  <Twitter
                    style={{ color: "#1e2761" }}
                    color="primary"
                    className={classes.icons}
                  />
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.designation}
                >
                  <a href={obj.link} target="_blank" style={{textDecoration: "none", color: "inherit"}}>{obj.designation}</a> 
                </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

function Team() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />

      <Grid
        container
        style={{
          justifyContent: "center",
          backgroundColor: "#a2d1f6",
          padding: 10,
        }}
      >
        <Grid item sm={12} lg={10}>
          <Typography component="div" style={{ padding: 30, marginBottom: 30 }}>
            {" "}
            {/* borderBottom: "2px solid #025e89"*/}
            <Typography variant="h3" className={`font ${classes.title}`}>
              Our Hard Working Team
            </Typography>
          </Typography>
          <Typography
            component="div"
            style={{ display: "flex", justifyContent: "center", padding: 20 }}
          >
            <TeamCard />
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Team;
