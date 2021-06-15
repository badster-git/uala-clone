import { makeStyles } from "@material-ui/styles";
import WaveContainer from "../layouts/WaveContainer";
import MarginContainer from "../layouts/MarginContainer";

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
  videoContent: {
    "& img": {
      width: "90%",
    },
  },
});

export default function PayBills() {
  const classes = useStyles();
  return (
    <WaveContainer>
      <MarginContainer>
        <div className={classes.leftContainer}>
          <div className={classes.transferTypeContainer}>
            <div className={classes.transferIcon}>
              <img src="images/iconFactura.svg" svg="Bill Icon" />
            </div>
            <div className={classes.titleSecondary}>Pay your bills</div>
            <div className={classes.texts}>
              <div>There are more than 4,000 services available</div>
              <div>whenever you want. You scan the</div>
              <div>invoice or search by item or company.</div>
            </div>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <a
            className={classes.videoContent}
            target="_blank"
            href="https://www.youtube.com/watch?v=CAd2AnOTsBU"
          >
            <img src="images/videoFacturas.svg" alt="Video player" />
          </a>
        </div>
      </MarginContainer>
    </WaveContainer>
  );
}
