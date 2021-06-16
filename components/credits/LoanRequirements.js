import MarginContainer from "../layouts/MarginContainer";
import WaveContainer from "../layouts/WaveContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    flexBasis: "50%",
  },
  rightContainer: {
    flexBasis: "50%",
    alignItems: "center",
    display: "flex",
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
  numberText: {
    marginBottom: "1rem",
  },
  blueText: {
    color: theme.palette.common.mainBlue,
    marginRight: ".5rem",
  },
  image: {
    "& img": {
      width: "100%",
    },
  },
}));

export default function HowToReload() {
  const classes = useStyles();
  return (
    <WaveContainer>
      <MarginContainer>
        <div className={classes.leftContainer}>
          <div className={classes.transferTypeContainer}>
            <div className={classes.transferIcon}>
              <img src="images/requirements-icon.svg" alt="Requirements Icon" />
            </div>
            <div className={classes.titleSecondary}>Requirements</div>
            <div className={classes.texts}>
              <p className={classes.numberText}>
                <span className={classes.blueText}>1.</span>
                Be an Argentine citizen or resident in the country.
              </p>
              <p className={classes.numberText}>
                <span className={classes.blueText}>2.</span>
                Be 18 years old or older.
              </p>
              <p className={classes.numberText}>
                <span className={classes.blueText}>3.</span>
                Have a personal bank account.
              </p>
              <p className={classes.numberText}>
                <span className={classes.blueText}>4.</span>
                Have an income of more than $7,000.
              </p>
              <p className={classes.numberText}>
                <span className={classes.blueText}>5.</span>
                Have no debts registered in the last 24 months.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div>
            <a target="_blank" href="#" className={classes.image}>
              <img src="images/loansVideo.png" alt="Video player" />
            </a>
          </div>
        </div>
      </MarginContainer>
    </WaveContainer>
  );
}
