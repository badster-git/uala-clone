import { makeStyles } from "@material-ui/styles";
import WaveContainer from "./WaveContainer";

const useStyles = makeStyles({
  marginContainer: {
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: "64px",
    paddingTop: "0px",
    flexDirection: "column",
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "90px 0",
  },
  titleTertiary: {
    fontSize: "24px",
    lineHeight: 1.4,
    fontWeight: "400",
    color: "#3e6bfd",
    marginBottom: "2rem",
  },
  titleSecondary: {
    fontSize: "28px",
    lineHeight: 1.4,
    fontWeight: "400",
    color: "#3a3a3a",
  },
  sectionTitle: {
    width: "100%",
  },
  downloadSteps: {
    display: "flex",
    position: "relative",
  },
  downloadStep: {
    flexBasis: "25%",
    zIndex: 1,
  },
  downloadStepBar: {
    position: "absolute",
    width: "80%",
    height: "4px",
    left: "34px",
    transition: "6s",
    background: "#3e6bfd",
    top: "25%",
  },
  downloadStepText: {
    color: "#909094",
    fontSize: "16px",
    marginRight: "30%",
    marginTop: "16px",
  },
  transferContainer: {
    display: "flex",
    flexBasis: "100%",
  },
  transfer: {
    color: "#8b8b8b",
    display: "flex",
    marginRight: "32px",
    alignItems: "center",
    flexBasis: "30%",
  },
  transferLogos: {
    display: "flex",
    justifyContent: "space-between",
    flexBasis: "70%",
    "& img": {
      maxWidth: "20%",
    },
  },
  stepNumber: {
    color: "#3e6bfd",
    marginRight: "4px",
  },
});
export default function HowToJoin() {
  const classes = useStyles();
  return (
    <WaveContainer>
      <div className={classes.marginContainer}>
        <h5 className={`${classes.titleSecondary} ${classes.sectionTitle}`}>
          How to join Ualá?
        </h5>
        <div className={classes.downloadSteps}>
          <div className={classes.downloadStepBar}></div>
          <div className={classes.downloadStep}>
            <div>
              <img src="images/app.svg" alt="App image" />
            </div>
            <div className={classes.downloadStepText}>
              <span className={classes.stepNumber}>1.</span>
              Download the app from the PlayStore or App Store on your cell
              phone.
            </div>
          </div>
          <div className={classes.downloadStep}>
            <div>
              <img src="images/doc.svg" alt="App image" />
            </div>
            <div className={classes.downloadStepText}>
              <span className={classes.stepNumber}>2.</span>
              Complete the registration with your data from the app.
            </div>
          </div>
          <div className={classes.downloadStep}>
            <div>
              <img src="images/delivery.svg" alt="App image" />
            </div>
            <div className={classes.downloadStepText}>
              <span className={classes.stepNumber}>3.</span>
              Receive your Ualá card within 15 business days.
            </div>
          </div>
          <div className={classes.downloadStep}>
            <div>
              <img src="images/contactless.svg" alt="App image" />
            </div>
            <div className={classes.downloadStepText}>
              <span className={classes.stepNumber}>4.</span>
              Activate your card from the app and charge a balance to start
              using it!
            </div>
          </div>
        </div>
      </div>
      <div className={classes.marginContainer}>
        <h2 className={classes.titleTertiary}>Load balance</h2>
        <div className={classes.transferContainer}>
          <div className={classes.transfer}>
            <img
              style={{ marginRight: "24px" }}
              src="images/transfer-icon.svg"
            />
            <span>Transfer CVU / CBU</span>
          </div>
          <div className={classes.transferLogos}>
            <img src="images/rapipago.svg" />
            <img src="images/pagofacil.svg" />
            <img src="images/telerecargas.svg" />
            <img src="images/cobro-express.svg" />
          </div>
        </div>
      </div>
    </WaveContainer>
  );
}
