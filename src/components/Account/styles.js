import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  // ---------------------- Navbar ------------------------- //
  connectBtn: {
    color: "#7CDDFE !important",
    border: "2px solid !important",
    borderRadius: "100px !important",
    fontWeight: "550 !important",
    fontSize: "12px",
    lineHeight: "1.5",
    width: "150px",
    marginRight: "20px !important",
    backgroundColor: "#7cddfe4a !important",

    "@media (min-width: 320px)": {
      marginRight: "10px important!",
    },
    "@media (min-width:1281px)": {
      fontSize: "12pt ",
      width: "150px",
    },
  },

  navLink: {
    alignItems: "baseline",
    fontSize: "14pt",
  },
  linkStyle: {
    fontFamily: "Titillium Web",
    color: "#fff",
    textDecoration: "uppercase ",
    fontSize: "12pt",
    "&:hover": {
      color: "#00ffff",
    },
    "@media (min-width:320px)": {
      fontSize: "12pt",
      margin: "0 .5em 0 .5em",
      justifySelf: "space-evenly",
    },
    "@media (min-width: 480px)": {
      margin: "0 .5em 0 .5em",
    },
    "@media (min-width: 600px)": {
      fontSize: "13pt",

      margin: "0 .6em 0 .6em",
    },
    "@media (min-width:820px)": {
      // fontSize: "12pt",
      margin: "0 1em 0 1em",
    },
    "@media (min-width:1025px)": {
      // fontSize: "16pt",
      margin: "0 1em 0  1em",
    },
    "@media (min-width:1281px)": {
      fontSize: "14pt",
      margin: "0 1em 0  1em",
    },
  },

  // ---------------------- Hamburger Menu ------------------------- //

  hamburger: {
    position: "fixed",
    top: 30,
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "column nowrap",
    zIndex: 2000,
  },
  burger: {
    "@media (max-width:767px)": {
      display: "fixed",
      marginLeft: "10px",
      zIndex: 10,
      width: "2rem",
      height: "0.17rem",
      borderRadius: "10px",
      backgroundColor: "white",
      transformOrigin: "1px",
      transition: "all 0.3s linear",
    },
  },

  // ---------------------- Hamburger Menu ------------------------- //

  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "80vh",
    "@media (max-width:450px)": {
      margin: 0,
      padding: 0,
    },
  },
  appbar: {
    background: "transparent",
  },
  appbarWrapper: {
    width: "100%",
    margin: "0 auto",
    "@media (max-width:450px)": {
      width: "100%",
      display: "flex",
      justifyItem: "space-around",
    },
  },
  appbarTitle: {
    flexGrow: "1",
  },

  logoTitle: {
    width: "100vw",
    maxWidth: "800px",
    "@media (max-width:800px)": {
      width: "500px",
    },
  },
  subHeading: {
    fontFamily: "Titillium Web",
    position: "relative",
    top: -135,
    width: "600px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    fontWeight: 500,
    fontSize: "13pt",
    paddingTop: "25px",
    "@media (max-width:840px)": {
      position: "relative",
    },

    "@media (max-width:800px)": {
      position: "relative",
      maxWidth: 420,
      top: -90,
    },

    "@media (max-width:480px)": {
      width: "350px",
      fontSize: "11pt",
    },
  },
}));
