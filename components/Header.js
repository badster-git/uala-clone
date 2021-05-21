import React, { useState } from "react";
import Link from "./Link";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
  headerContainer: {
    display: "flex",
    maxWidth: "1080px",
    margin: "0 auto",
    height: "90px",
  },
  headerLogo: {
    flexBasis: "200px",
    alignItems: "flex-end",
    display: "flex",
  },
  headerMenu: {
    display: "flex",
    alignItems: "flex-end",
    flexGrow: 1,
    justifyContent: "flex-end",
    marginRight: "32px",
  },
  headerMenuContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  optionsContainer: {
    color: "#707070",
    fontSize: "17px",
    textAlign: "right",
    marginLeft: "48px",
    position: "relative",
  },
  optionTitle: {
    cursor: "pointer",
  },
  marginOptionMenu: {
    height: "16px",
    position: "absolute",
    width: "100%",
  },
  optionMenu: {
    position: "absolute",
    backgroundColor: "white",
    transform: "translate(-28px, 0px)",
    boxShadow: "0px 0px 8px #d2d2d2",
    marginTop: "16px",
    borderRadius: "6px",
    zIndex: 1
  },
  optionMenuList: {
    padding: "16px 0",
    flexBasis: "100%",
    display: "flex",
    flexWrap: "wrap",
    "& a": {
      flexBasis: "100%",
      color: "#707070",
    },
    "& li": {
      display: "flex",
      flexBasis: "100%",
      padding: "8px 28px",
      textAlign: "left",
      zIndex: 5,
      whiteSpace: "nowrap",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#F5F5F5",
      },
    },
  },
});

const Header = () => {
  const [isShown, setIsShown] = useState(-1);
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerLogo}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Ualá logo" />
        </Link>
      </div>
      <div className={classes.headerMenu}>
        <div className={classes.headerMenuContainer}>
          <div className={classes.optionsContainer}>
            <div
              className={`functions-list ${classes.optionTitle}`}
              onMouseEnter={(e) => {
                if (e.target.className.indexOf("optionMenuList") === -1) {
                  setIsShown(e.target.className);
                }
              }}
              onMouseLeave={(e) => e.preventDefault()}
            >
              Functions
            </div>
            <div className={classes.marginOptionMenu}></div>
            {isShown == `functions-list ${classes.optionTitle}` && (
              <div
                className={classes.optionMenu}
                onMouseLeave={() => setIsShown(-1)}
              >
                <ul className={classes.optionMenuList}>
                  <Link href="/card">
                    <li>The Card</li>
                  </Link>
                  <Link href="/payments">
                    <li>Payments and Chargebacks</li>
                  </Link>
                  <Link href="/transfers">
                    <li>Transfers</li>
                  </Link>
                  <Link href="/investments">
                    <li>Investments</li>
                  </Link>
                  <Link href="/credits">
                    <li>Credits</li>
                  </Link>
                  <Link href="/withdrawals">
                    <li>Withdrawals</li>
                  </Link>
                  <Link href="/cost-analysis">
                    <li>Cost Analaysis</li>
                  </Link>
                  <Link href="/costs">
                    <li>Costs</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className={classes.optionsContainer}>
            <div
              className={`help-list ${classes.optionTitle}`}
              onMouseEnter={(e) => {
                if (e.target.className.indexOf("optionMenuList") === -1) {
                  setIsShown(e.target.className);
                }
              }}
            >
              Help and Security
            </div>
            <div className={classes.marginOptionMenu}></div>
            {isShown == `help-list ${classes.optionTitle}` && (
              <div
                className={classes.optionMenu}
                onMouseLeave={() => setIsShown(-1)}
              >
                <ul className={classes.optionMenuList}>
                  <Link href="/faqs">
                    <li>Frequently asked questions</li>
                  </Link>
                  <Link href="/contact">
                    <li>Contact Us</li>
                  </Link>
                  <Link href="http://comunidad.uala.com.ar/" target="_blank">
                    <li>Transfers</li>
                  </Link>
                  <Link href="/security">
                    <li>Security tips</li>
                  </Link>
                  <Link href="/card#stolen">
                    <li>File for lost or stolen card</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className={classes.optionsContainer}>
            <div
              className={`about-list ${classes.optionTitle}`}
              onMouseEnter={(e) => {
                if (e.target.className.indexOf("optionMenuList") === -1) {
                  setIsShown(e.target.className);
                }
              }}
            >
              About Ualá
            </div>
            <div className={classes.marginOptionMenu}></div>
            {isShown == `about-list ${classes.optionTitle}` && (
              <div
                className={classes.optionMenu}
                onMouseLeave={() => setIsShown(-1)}
              >
                <ul className={classes.optionMenuList}>
                  <Link href="/faqs">
                    <li>About us</li>
                  </Link>
                  <Link href="/contact">
                    <li>Contact Us</li>
                  </Link>
                  <Link href="http://comunidad.uala.com.ar/" target="_blank">
                    <li>Jobs</li>
                  </Link>
                  <Link href="/security">
                    <li>Press</li>
                  </Link>
                  <Link target="_blank" href="http://blog.uala.com.ar/">
                    <li>Our blog</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className={classes.optionsContainer}>
            <div className={classes.optionTitle}>Costs</div>
            <div className={classes.marginOptionMenu}></div>
          </div>
          <div className={classes.optionsContainer}>
            <div className={classes.optionTitle}>Promotions</div>
            <div className={classes.marginOptionMenu}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
