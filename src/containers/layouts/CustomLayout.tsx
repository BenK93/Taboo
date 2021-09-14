import React from "react";
import "./Layout.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ViewCarouselRoundedIcon from "@material-ui/icons/ViewCarouselRounded";
import LocalLibraryRoundedIcon from "@material-ui/icons/LocalLibraryRounded";
import { Link } from "react-router-dom";

const CustomLayout = (props: any) => {
  return (
    <>
      <div className="main">
        <AppBar
          position="static"
          className="menu-con"
          style={{ backgroundColor: "#921441" }}
        >
          <Toolbar variant="dense" className="menu-inner">
            <Typography className="menu-option">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Taboo
              </Link>
              <ViewCarouselRoundedIcon />
            </Typography>
            <Typography className="menu-option">
              <Link
                to="/game-rules"
                style={{ color: "white", textDecoration: "none" }}
              >
                חוקי המשחק
              </Link>
              <LocalLibraryRoundedIcon />
            </Typography>
          </Toolbar>
        </AppBar>
        {props.children}
      </div>
      <div className="footer-con">
        <p className="footer-text">Design & Developed By Ben Koren Kruiger</p>
      </div>
    </>
  );
};

export default CustomLayout;
