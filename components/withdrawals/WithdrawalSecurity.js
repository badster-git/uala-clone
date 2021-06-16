import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  leftContainer: {
    flexBasis: "50%",
  },
  rightContainer: {
    flexBasis: "50%",
  },
  transferTypeContainer: {
    marginRight: "48px",
  },
  transferIcon: {
    "& img": {
      width: "68px",
    },
  },
  titleSecondary: {
    fontSize: "28px",
    lineHeight: "1.4",
    fontWeight: "400",
    color: "#3a3a3a",
    marginTop: "32px",
    marginBottom: "16px",
  },
  texts: {
    fontSize: "20px",
    lineHeight: "1.5",
    fontWeight: "400",
    color: "#747474",
  },
  transferLogos: {
    marginTop: "32px",
    display: "flex",
    flexWrap: "wrap",
    "& img": {
      flexBasis: "40%",
      margin: "8px",
      maxHeight: "100px",
    },
  },
});

export default function WithdrawalSecurity() {
  const classes = useStyles();
  return (
    <MarginContainer alignStyle="alignCenterDesktop">
      <div className={classes.leftContainer}>
        <div className={classes.transferTypeContainer}>
          <div className={classes.transferIcon}>
            <img src="images/extractIcon3.svg" alt="Withdrawal Icon" />
          </div>
          <div className={classes.titleSecondary}>Generate a PIN</div>
          <div className={classes.texts}>
            <div className="mid">
              To extract money you first need the PIN, a 4-digit key that you
              generate from the "Card" section of the app.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.image}>
          <img src="images/extractHome.svg" alt="Withdrawal Phone Image" />
        </div>
      </div>
    </MarginContainer>
  );
}
