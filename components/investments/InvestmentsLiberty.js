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
  videoImage: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    "& img": {
      width: "80%",
    },
  },
});

export default function InvestmentsLiberty() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <div className={classes.transferTypeContainer}>
          <div className={classes.transferIcon}>
            <img src="images/transferIcon1.svg" alt="Transfer Icon" />
          </div>
          <div className={classes.titleSecondary}>
            Release your money whenever you want
          </div>
          <div className={classes.texts}>
            <p>
              When you want to use your money, you can withdraw it on the spot
              and that's it. Anytime and anywhere.
            </p>
          </div>
        </div>
      </div>
      <a
        className={`${classes.rightContainer} ${classes.videoImage}`}
        target="_blank"
        href="https://www.youtube.com/watch?v=GknyoTa9HDo"
      >
        <img src="images/videoLiberate.svg" alt="Video player" />
      </a>
    </MarginContainer>
  );
}
