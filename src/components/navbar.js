import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import { Instagram, Twitter, Facebook, YouTube } from "@material-ui/icons";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ReactAudioPlayer from 'react-audio-player';

import Web3 from "web3";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize: 50,
    color: "#1e2761",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: "bolder",
    color: "#1e2761",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  navBar: {
    // backgroundColor: "#7a2048",
    backgroundColor: "white",
    // backgroundImage: "linear-gradient(179deg, #7a2048, #7a2048cf)",
    // backgroundImage: `url("/footer.png")`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    boxShadow: "none",
    color: "black",
    padding: "10px 30px",
    [theme.breakpoints.down("xs")]: {
      padding: "3px 0",
    },
  },
  button: {
    borderRadius: 0,
    margin: 5,
    padding: "15px 10px",
    color: "#408ec6",
    background: "#1e2761"
  },
  icons: {
    fontSize: 30,
    margin: 10,
    marginBottom: 0,
    color: "#1e2761",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    
  },
  menuItem: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "#7a2048"
  },
  navItems:{
    
  },
  navItemsContainer: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
  }
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [walletConnected, setWalletConnected] = React.useState(false);
  const classes = useStyles();

  const { active, activate } = useWeb3React();

  useEffect(() => {
    setWalletConnected(active);
  }, [active]);
  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }

  let chainId = process.env.REACT_APP_CHAIN_ID;

  async function connect() {
    try {
      if (!window?.web3?.currentProvider) {
        alert(`Metamask is not installed.
Try Different browser or Install Metamask.`);
        return;
      }
      let id = await web3.eth.net.getId();
      if (id !== parseInt(chainId)) {
        alert("Please change your network to Rinkbey");
        return false;
      }
      await activate(injected);
      setWalletConnected(true);
    } catch (ex) {
      console.log(ex);
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" className={classes.navBar}>
      <Container style={{ padding: 0, maxWidth: "100%" }}>
        <Toolbar style={{ padding: 0, maxWidth: "100%", display: "flex", justifyContent: "space-between" }}>
          <Typography component="span"  className={classes.navItemsContainer}>
            <a href="http://www.mastakodastreetclub.com/" >
          <Typography component="span" style={{margin: 10}}>
            <img src="/logo.png" width="40px"/>
            </Typography>
            </a>
            <Hidden only={["xs", "sm"]}>
            <Typography component="span">
              <Button
                  href="#purchase"
                  className={classes.navItems}
                >
                Purchase
              </Button>
              {/* <Button
                href="#"
                className={classes.navItems}
              >
                Utility
              </Button> */}
              <Button
                href="#roadmap"
                className={classes.navItems}
              >
                Roadmap
              </Button>
              {/* <Button
                href="#"
                className={classes.navItems}
              >
                Collectibles
              </Button> */}
              </Typography>
            </Hidden>
          </Typography>
          <Hidden only={["xs", "sm"]}>
            <Typography component="div">
              <ReactAudioPlayer
                src="music.mp3"
                autoPlay={true}
                controls={true}
                loop={true}
                style={{marginBottom: -10}}
              />
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://twitter.com/MastaKodaSC"
                target="_blank"
              >
                {" "}
                <Twitter
                  style={{ color: "#1e2761" }}
                  color="primary"
                  className={classes.icons}
                />
              </a>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://www.instagram.com/accounts/login/?next=/mastakodasc/"
                target="_blank"
              >
                <Instagram
                  style={{ color: "#1e2761" }}
                  color="primary"
                  className={classes.icons}
                />
              </a>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://www.facebook.com/MastaKodaSC/"
                target="_blank"
              >
                {" "}
                <Facebook
                  style={{ color: "#1e2761" }}
                  color="primary"
                  className={classes.icons}
                />
              </a>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://youtu.be/ouIFDxQR_Qs"
                target="_blank"
              >
                {" "}
                <YouTube
                  style={{ color: "#1e2761" }}
                  color="primary"
                  className={classes.icons}
                />
              </a>
              {/* <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://www.instagram.com/accounts/login/?next=/mastakodasc/"
                target="_blank"
              >
                <Instagram
                  style={{ color: "#1e2761" }}
                  color="primary"
                  className={classes.icons}
                />
              </a> */}
              {/* <Button
                href="https://staking.catmobstaz.com"
                color="inherit"
                variant="contained"
                className={classes.button}
              >
                Stake NFT's
              </Button>
            <Button
              color="inherit"
              variant="contained"
              className={classes.button}
              onClick={connect}
            >
              {" "}
              {walletConnected ? "Connected" : "Connect Wallet"}
            </Button> */}
            </Typography>
          </Hidden>
          <Hidden only={["md", "lg", "xl"]}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon className={classes.menuButton} />
            </IconButton>
          </Hidden>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.menu}
          >
            {/* {window.ethereum ? (
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <Button
                  color="inherit"
                  variant="contained"
                  className={classes.button}
                  style={{ color: "#408ec6" }}
                  onClick={connect}
                >
                  {walletConnected ? "Connected" : "Connect Wallet"}
                </Button>
              </MenuItem>
            ) : (
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <Button
                  color="inherit"
                  variant="contained"
                  className={classes.button}
                  style={{ color: "#408ec6" }}
                  href={
                    "https://metamask.app.link/dapp/catmobstaz.com/"
                  }
                >
                  Connect Wallet
                </Button>
              </MenuItem>
            )} */}
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://twitter.com/MastaKodaSC"
                target="_blank"
              >
                <Twitter color="primary" className={classes.icons} />
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://www.instagram.com/accounts/login/?next=/mastakodasc/"
                target="_blank"
              >
                <Instagram color="primary" className={classes.icons} />
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://www.facebook.com/MastaKodaSC/"
                target="_blank"
              >
                <Facebook color="primary" className={classes.icons} />
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <a
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href="https://youtu.be/ouIFDxQR_Qs"
                target="_blank"
              >
                <YouTube color="primary" className={classes.icons} />
              </a>
            </MenuItem>
           
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <Button
                  href="#purchase"
                  className={classes.navItems}
                >
                Purchase
              </Button>
              </MenuItem>
              {/* <MenuItem onClick={handleClose} className={classes.menuItem}>
              <Button
                href="#"
                className={classes.navItems}
              >
                Utility
              </Button>
              </MenuItem> */}
              <MenuItem onClick={handleClose} className={classes.menuItem}>
              <Button
                href="#roadmap"
                className={classes.navItems}
              >
                Roadmap
              </Button>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>
            <ReactAudioPlayer
                src="music.mp3"
                autoPlay={true}
                controls={true}
                loop={true}
              />
            </MenuItem>
              {/* <MenuItem onClick={handleClose} className={classes.menuItem}>
              <Button
                href="#roadmap"
                className={classes.navItems}
              >
                Collectibles
              </Button>
              </MenuItem> */}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
