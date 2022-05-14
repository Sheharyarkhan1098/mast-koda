import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Web3 from "web3";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import contractAbi from "../abi/testnetGenesisAbi.json";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { isMobile } from "react-device-detect";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";


const useStyles = makeStyles((theme) => ({
  menuButton:  {
    marginRight: theme.spacing(2),
    borderRadius: 0,
    padding: 10,
    margin: "10px",
    color: "#408ec6",
    backgroundColor: "#1e2761", //"#F2DFD8"
    "&:disabled": {
      color: "#408ea6",
      backgroundColor: "#040b38",
    },
    "&:hover": {
      backgroundColor: "#86e3f8",
      color: "#408ec6",
    },
  },
  title: {
    flexGrow: 1,
  },
  img: {
   maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },
  h3: {
    marginBottom: 10,
    fontWeight: "Bolder",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  h4: {
    marginBottom: 5,
    fontWeight: "Bolder",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  mint: {
    marginBottom: 5,
    fontWeight: "Bolder",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  body2: {
    marginBottom: 10,
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  subtitle1: {
    fontWeight: "bold",
    color: "#408ec6",
    [theme.breakpoints.down("xs")]: {
      fontSize: 11,
    },
  },
  inputCount: {
    width: 100,
    backgroundColor: "white",
    // borderRadius: 8,
    [theme.breakpoints.down("xs")]: {
      width: 50,
    },
  },
  decrementBtn: {
    // borderTopLeftRadius: 30,
    // borderBottomLeftRadius: 30,
    borderRadius: 0,
    backgroundColor: "#1e2761",
    color: "white",
    border: "1px solid #1e2761",
    padding: 7,
    "&:disabled": {
      color: "white",
      backgroundColor: "grey",
    },
    "&:hover": {
      backgroundColor: "#86e3f8",
      color: "#1e2761",
    },
  },
  incrementBtn: {
    // borderTopRightRadius: 30,
    // borderBottomRightRadius: 30,
    borderRadius: 0,
    backgroundColor: "#1e2761",
    color: "white",
    border: "1px solid #1e2761",
    padding: 7,
    "&:disabled": {
      color: "white",
      backgroundColor: "grey",
    },
    "&:hover": {
      backgroundColor: "#86e3f8",
      color: "#1e2761",
    },
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
    marginTop: -100,
    borderRadius: 10,
    background: "white",
    padding: 50,
    background: "#a2d1f6"
  },
  gridItemContent: {
    maxWidth: "450px",
    padding: 20,
    display: "flex",
    alignItems: "space-between",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  marginCustom: {
    marginBottom: 20
  },
  showOnMd: {
    display: "flex",
    justifyContent: "center",
    maxHeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  showOnSM: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

function TopSection() {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const price = 0.25; // 0.07 -- for public sale 0.10

  const { active, account, activate } = useWeb3React();

  

  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }
  const chainId = process.env.REACT_APP_CHAIN_ID;
  const ContractAddress = process.env.REACT_APP_GENESIS_CONTRACT_ADDRESS;
  const Contract = new web3.eth.Contract(contractAbi, ContractAddress);
  async function mint() {
    try {
      if (!window?.web3?.currentProvider) {
        alert(`Metamask is not installed.
Try Different browser or Install Metamask.`);
        return;
      }
      await activate(injected);

      let id = await web3.eth.net.getId();

      if (id !== parseInt(chainId)) {
        alert("Please change your network to rinkbey");
        return false;
      }

      const accounts = await web3.eth.getAccounts();
        await Contract.methods.mint(accounts[0], count).send({
          from: accounts[0],
          value: web3.utils.toWei(`${count * price}`, "ether"),
        });
      return "success";
    } catch (err) {
      alert(JSON.stringify(err.message));
      return "failed";
    }
  }

  async function connect() {
    try {
      let id = await web3.eth.net.getId();

      if (id !== parseInt(chainId)) {
        alert("Please change your network to rinkbey");
        return false;
      }
      setTimeout(async () => {
        await activate(injected);
      }, 1000);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
    
      <Container maxWidth="xl" sx={{background: "white"}}>
        <Typography component="div" style={{paddingTop: 80, marginBottom: -10}} >
          <img src="/banner.jpeg" width="100%" className={classes.banner} />
        </Typography>
        <Typography component="div" style={{background: "rgb(17 126 178)", width: "100%",  paddingBottom: "30%"}} >
          <Grid container className={classes.gridContainer}>
            <Grid container item xs={10} lg={8} className={classes.gridContainerItem}>
              <Grid item xs={12} md={6} style={{disply: "flex", justifyContent: "center"}}>
                <Typography component={"div"} className={classes.showOnMd} >
                  <img src="/Exclusive Games.png" width="80%" height="100%"/>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="div" className={classes.gridItemContent}>
                <Typography variant="h3" className={`${classes.marginCustom} font`}>
                Welcome to Masta Koda Exclusive Mansion
                </Typography>
                <Typography variant="body1" className={classes.marginCustom}>
                Join us Masta Kodas, Master Friends as we take a journey and discover all the possibilities of the metaverse. A community of people from around the world, brought together by a shared story of global chaos and a shared mission to stand for what’s right. We have the drive to thrive in NFTs, ART, Gaming and the Metaverse.
                </Typography>
                <Button href="https://discord.com/invite/2AwzC8SHuT" variant="contained" color={"primary"} className={classes.marginCustom}>
                Join the Tribe on Discord
                </Button>
                </Typography>
              </Grid>
            {/* <Grid item xs={12} md={0} style={{disply: "flex", justifyContent: "center"}}>
                <Typography component={"div"} style={{display: "flex", justifyContent: "center", maxHeight: 500}}>
                  <img src="/sample.png" width="80%" height="100%"/>
                </Typography>
              </Grid> */}
            </Grid>
              <Grid item xs={12} md={6} style={{disply: "flex", justifyContent: "center"}}>
              <Typography component={"div"} className={classes.showOnSM} >
                  <img src="/Monthly Awards.png" width="80%" />
                </Typography>
            </Grid>
              <Grid id="purchase" item xs={12} md={6}>
              <Typography component="div" style={{color: "rgb(245,242,236)"}} className={classes.gridItemContent}>
                <Typography variant="h3" className={`${classes.marginCustom} font`}>
                The Metaverse is a whole new landscape that Masta Koda will master with you as we try new possibilities and add new experiences to it.
                </Typography>
                <Typography variant="body1" className={classes.marginCustom}>
                The Masta Koda Street Club is a collection of limited, unique, generated NFTs hosted on the Ethereum blockchain.
                <br />
                <br />
                Every Masta Koda is unique and no two are alike.
                <br />
                <br />
                Just like you are unique and have different character traits, clothes, accessories and goodies.
                <br />
                <br />
                </Typography>
                <Button onClick={connect} variant="contained" color={"primary"} className={classes.marginCustom}>
                Mint Now
                </Button>
                </Typography>
            </Grid>
          </Grid>
        </Typography>
       
      </Container>

    </React.Fragment>
  );
}

export default TopSection;
