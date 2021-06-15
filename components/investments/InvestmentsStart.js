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
  numberList: {
    "& ul li": {
      display: "flex",
      marginTop: "20px",
    },
  },
  listNumber: {
    color: "#3e6bfd",
    marginRight: "16px",
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

export default function InvestmentsStart() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <div className={classes.transferTypeContainer}>
          <div className={classes.transferIcon}>
            <img src="images/transferIcon1.svg" alt="Transfer Icon" />
          </div>
          <div className={classes.titleSecondary}>Start investing</div>
          <div className={classes.texts}>
            <div className={classes.numberList}>
              <ul>
                <li>
                  <div className={classes.listNumber}>1.</div>
                  <div>
                    Enter the "Investments" section of the app and answer some
                    questions.
                  </div>
                </li>
                <li>
                  <div className={classes.listNumber}>2.</div>
                  <div>
                    Choose the amount you want to invest(starting at $1 and
                    without limits).
                  </div>
                </li>
                <li>
                  <div className={classes.listNumber}>3.</div>
                  <div>
                    See the results of your investment in 48 business hours.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a
        className={`${classes.rightContainer} ${classes.videoImage}`}
        target="_blank"
        href="https://www.youtube.com/watch?v=SoaNU08XXGk"
      >
        <img src="images/videoInvertir.svg" alt="Video player" />
      </a>
    </MarginContainer>
  );
}
