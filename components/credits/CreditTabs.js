import { FaChevronRight } from "react-icons/fa";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

import MarginContainer from "../layouts/MarginContainer";

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    flexBasis: "50%",
  },
  rightContainer: {
    flexBasis: "50%",
  },
  tabContainer: {
    flexBasis: "100%",
    display: "flex",
  },
  tabs: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  tab: {
    flexBasis: "48%",
    opacity: "75%",
    color: theme.palette.common.mainBlue,
    textAlign: "center",
    borderBottom: `2px solid ${theme.palette.common.mainBlue}`,
    padding: "14px 0",
    fontSize: "22px",
    cursor: "pointer",
  },
  active: {
    opacity: "100%",
  },
  aboutDataContainer: {
    display: "flex",
    flexBasis: "100%",
    marginTop: "64px",
  },
  textGray: {
    color: "lightblack",
    marginBottom: "1.5rem",
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    fontWeight: "500",
  },
  texts: {
    marginBottom: "1rem",
    fontSize: "20px",
    lineHeight: "1.5",
    fontWeight: "400",
    color: "#747474",
  },
  arrow: {
    alignItems: "center",
    marginBottom: "22px",
    fontSize: "18px",
    color: "#757575",
    lineHeight: 2,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    "& img": {
      width: "75%",
    },
  },
}));

export default function CardDescription() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.id);
  };

  return (
    <MarginContainer alignStyle={"wrapContainer"}>
      <div className={classes.tabContainer}>
        <div className={classes.tabs}>
          <div
            id="loan"
            onClick={handleChange}
            className={`${value === "loan" ? classes.active : ""} ${
              classes.tab
            }`}
          >
            Loans
          </div>
          <div
            id="payments"
            onClick={handleChange}
            className={`${value === "payments" ? classes.active : ""} ${
              classes.tab
            }`}
          >
            Payments
          </div>
        </div>
      </div>
      {/** TODO: Change this to a layout component to improve readability */}
      {value === "loan" ? (
        <div id="loanContainer" className={classes.aboutDataContainer}>
          <div className={classes.leftContainer}>
            <div className={classes.textGray}>Loans</div>
            <p className={classes.texts}>
              Simulate your loan of up to $500,000 from the app, make the
              request and receive the money in your account.
            </p>
            <p className={classes.arrow}>
              <FaChevronRight
                style={{
                  color: "#3e6bfd",
                  marginRight: "12px",
                  lineHeight: "1",
                  fontWeight: "900",
                }}
              />
              The money deposity in your Ualá.
            </p>
            <p className={classes.arrow}>
              <FaChevronRight
                style={{
                  color: "#3e6bfd",
                  marginRight: "12px",
                  lineHeight: "1",
                  fontWeight: "900",
                }}
              />
              The fees are fixed and you choose which day they expire.
            </p>
            <p className={classes.arrow}>
              <FaChevronRight
                style={{
                  color: "#3e6bfd",
                  marginRight: "12px",
                  lineHeight: "1",
                  fontWeight: "900",
                }}
              />
              You can transfer the money to another account or use it for
              whatever you want.
            </p>
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.imageContainer}>
              <img src="images/credits-phone.svg" alt="Credits Image" />
            </div>
          </div>
        </div>
      ) : (
        <div id="paymentsContainer" className={classes.aboutDataContainer}>
          <div className={classes.leftContainer}>
            <div className={classes.textGray}>Payments</div>
            <p className={classes.texts}>
              Buy now and pay later. Enter a payment that you have already made
              and we will return the money the same day.
            </p>
            <p className={classes.arrow}>
              <FaChevronRight
                style={{
                  color: "#3e6bfd",
                  marginRight: "12px",
                  lineHeight: "1",
                  fontWeight: "900",
                }}
              />
              Put your purchases, payment of bills or recharges into
              installments.
            </p>
            <p className={classes.arrow}>
              <FaChevronRight
                style={{
                  color: "#3e6bfd",
                  marginRight: "12px",
                  lineHeight: "1",
                  fontWeight: "900",
                }}
              />
              You choose the amount of fees and expiration date.
            </p>
            <p className={classes.arrow}>
              <FaChevronRight
                style={{
                  color: "#3e6bfd",
                  marginRight: "12px",
                  lineHeight: "1",
                  fontWeight: "900",
                }}
              />
              We will return the money to you on the spot.
            </p>
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.imageContainer}>
              <img src="images/celular-cuotas.png" alt="Payments Image" />
            </div>
          </div>
        </div>
      )}
    </MarginContainer>
  );
}
