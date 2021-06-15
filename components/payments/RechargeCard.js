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
    <MarginContainer>
      <div className={classes.leftContainer}>
        <a
          className={classes.videoContent}
          target="_blank"
          href="https://www.youtube.com/watch?v=JHPgGXXSSwY"
        >
          <img src="images/video-como-recargar.svg" alt="Video player" />
        </a>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.transferTypeContainer}>
          <div className={classes.transferIcon}>
            <img src="images/iconRecarga.svg" alt="Recharge icon" />
          </div>
          <div className={`${classes.transferTitle} ${classes.titleSecondary}`}>
            Recharge your cell phone or TV
          </div>
          <div className={classes.texts}>
            <div>Use your prepaid services without limits.</div>
            <div>Top up credit on your cell phone or prepaid TV</div>
            <div>from the app and is credited on the spot.</div>
          </div>
        </div>
      </div>
    </MarginContainer>
  );
}
