import MarginContainer from "../layouts/MarginContainer";
import WaveContainer from "../layouts/WaveContainer";

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
    <WaveContainer>
      <MarginContainer>
        <div className={classes.leftContainer}>
          <div className={classes.transferTypeContainer}>
            <div className={classes.transferIcon}>
              <img src="images/transferIcon3.svg" alt="Transfer Icon" />
            </div>
            <div className={classes.titleSecondary}>Security Key</div>
            <div className={classes.texts}>
              <div>
                To make transfers from the Ualá app you need the 6-digit
                password or security code that you created when we validated
                your username. If you forgot it, you can recover it by clicking
                on "I forgot my password" before confirming the transfer or
                movement of silver.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <a target="_blank" href="https://www.youtube.com/watch?v=YaH4MZUAlXA">
            <img src="images/videoTransferencia.svg" alt="Video player" />
          </a>
        </div>
      </MarginContainer>
    </WaveContainer>
  );
}
