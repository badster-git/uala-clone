import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  leftContainer: {
    flexBasis: "50%",
    "&$videoImage": {
      justifyContent: "flex-start",
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
  videoImage: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    "& img": {
      width: "80%",
    },
  },
});

export default function InvestmentsResults() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <a
        className={`${classes.leftContainer} ${classes.videoImage}`}
        target="_blank"
        href="https://www.youtube.com/watch?v=mibW7zPvxDE"
      >
        <img src="images/videoResults.svg" alt="Video player" />
      </a>
      <div className={classes.rightContainer}>
        <div className={classes.transferTypeContainer}>
          <div className={classes.transferIcon}>
            <img src="images/transferIcon1.svg" alt="Transfer Icon" />
          </div>
          <div className={classes.titleSecondary}>See the results</div>
          <div className={classes.texts}>
            <p>See the results of your investment every day from the app.</p>
          </div>
        </div>
      </div>
    </MarginContainer>
  );
}
