import { makeStyles } from "@material-ui/styles";
import MarginContainer from "../layouts/MarginContainer";

const useStyles = makeStyles({
  leftContainer: {
    flexBasis: "50%",
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
  videoContent: {
    "& img": {
      width: "90%",
    },
  },
});

export default function PayBills() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <a
          className={classes.videoContent}
          target="_blank"
          href="https://www.youtube.com/watch?v=HsEbrmVWqNI"
        >
          <img src="images/video-cargar-sube.svg" alt="Video player" />
        </a>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.transferTypeContainer}>
          <div className={classes.transferIcon}>
            <img src="images/iconSube.svg" svg="Bill Icon" />
          </div>
          <div className={classes.titleSecondary}>Charge your SUBE</div>
          <div className={classes.texts}>
            <div>Don't run out of money in SUBE. Load</div>
            <div>from the app and credit the amount in a</div>
            <div>SUBE automatic terminal or</div>
            <div>mobile connection.</div>
          </div>
        </div>
      </div>
    </MarginContainer>
  );
}
