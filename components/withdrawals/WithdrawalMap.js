import MarginContainer from "../layouts/MarginContainer";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  leftContainer: {
    flexBasis: "50%",
  },
  videoContent: {
    "& img": {
      width: "90%",
    },
  },
  rightContainer: {
    flexBasis: "50%",
  },
  transferTypeContainer: {
    marginLeft: "48px",
  },
  transferIcon: {
    "& img": {
      width: "68px",
    },
  },
  transferTitle: {
    marginTop: "32px",
    marginBottom: "16px",
  },
  titleSecondary: {
    fontSize: "28px",
    lineHeight: "1.4",
    fontWeight: "400",
    marginBottom: "1rem",
    color: "#3a3a3a",
  },
  texts: {
    fontSize: "20px",
    lineHeight: 1.5,
    fontWeight: 400,
    color: "#747474",
  },
});

export default function RechargeCard() {
  const classes = useStyles();
  return (
    <div className="mapContainer">
      <MarginContainer alignStyle="btmTopPadding">
        <div className={classes.leftContainer}>
          <div className={classes.transferIcon}>
            <img src="images/extractIcon2.svg" alt="Map icon" />
          </div>
          <div className={`${classes.transferTitle} ${classes.titleSecondary}`}>
            Where to withdraw cash
          </div>
        </div>
        <div className={classes.rightContainer}></div>
      </MarginContainer>
      <iframe
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBfWUbEhZR0TaAgl7BIgQYY-M0S2rPB6LM
        &amp;q=Cajeros+Automaticos,Palermo,Buenos+Aires+AR"
        allowFullScreen=""
      ></iframe>
    </div>
  );
}
