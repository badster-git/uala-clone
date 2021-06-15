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
  redText: {
    color: "salmon",
  },
});

export default function TransferDetails() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <div className={classes.transferTypeContainer}>
          <div className={classes.transferIcon}>
            <img src="images/transferIcon1.svg" alt="Transfer Icon" />
          </div>
          <div className={classes.titleSecondary}>Transfers between users</div>
          <div className={classes.texts}>
            <div>
              You can receive or send money to your friends or family who have
              Ualá. Look for your username in the "Transfers" section or scan
              the QR code from your app. It is free and instant.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.transferTypeContainer}>
          <div className={classes.transferIcon}>
            <img src="images/transferIcon2.svg" alt="Bank Icon" />
          </div>
          <div className={classes.titleSecondary}>
            Transfers to bank and / or virtual accounts
          </div>
          <div className={classes.texts}>
            <div>
              You can receive or send money to your friends or family who have
              Ualá. Look for your username in the "Transfers" section or scan
              the QR code from your app. It is free and instant.
            </div>
          </div>
          <div className={classes.redText}>
            Remember that ATMs still do not allow transfers to CVU.
          </div>
        </div>
      </div>
    </MarginContainer>
  );
}
