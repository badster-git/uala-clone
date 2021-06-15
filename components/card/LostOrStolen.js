import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  leftContainer: {
    flexBasis: "50%",
    marginRight: "32px",
  },
  sectionCardTitle: {
    color: "#3a3a3a",
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
    marginBottom: "3rem",
  },
  texts: {
    fontSize: "20px",
    lineHeight: "1.5",
    fontWeight: "400",
    color: "#747474",
  },
  cardStep: {
    display: "flex",
    marginBottom: "32px",
  },
  cardStepIcon: {
    flexBasis: "30%",
    display: "flex",
    justifyContent: "center",

    "& img": {
      width: "120px",
      marginRight: "32px",
    },
  },
  cardStepSecondIcon: {
    flexBasis: "30%",
    display: "flex",
    justifyContent: "center",

    "& img": {
      width: "80px",
      marginRight: "32px",
    },
  },
  cardStepContent: {
    flexBasis: "70%",
  },
  titleTertiary: {
    color: "#3a3a3a",
    marginBottom: "1rem",
    fontSize: "24px",
    lineHeight: "1.4",
    fontWeight: "400",
  },
  containerSubtitle: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  },
});

export default function LostOrStolen() {
  const classes = useStyles();
  return (
    <MarginContainer alignStyle={"alignCenter"}>
      <div className={classes.leftContainer}>
        <div className={classes.sectionCardTitle}>
          <h1 className={classes.titleSecondary}>
            Was your Ualá lost or stolen?
          </h1>
        </div>
        <div>
          <div className={classes.cardStep}>
            <div className={classes.cardStepIcon}>
              <div>
                <img src="images/card3.gif" alt="Card Step 1 Animation" />
              </div>
            </div>
            <div className={classes.cardStepContent}>
              <h2 className={classes.titleTertiary}>1. Freeze your card</h2>
              <div className={`${classes.texts} ${classes.containerSubtitle}`}>
                If you cannot find your Ualá you can freeze it on the spot from
                the app to disable card operations. If you find it in a pocket,
                you defrost it and continue using it as usual.
              </div>
            </div>
          </div>
          <div className={`${classes.cardStep} ${classes.secondStep}`}>
            <div className={classes.cardStepSecondIcon}>
              <div>
                <img src="images/cardIcon2.svg" alt="Card Step 2 Icon" />
              </div>
            </div>
            <div className={classes.cardStepContent}>
              <h2 className={classes.titleTertiary}>2. Make the complaint</h2>
              <div className={`${classes.texts} ${classes.containerSubtitle}`}>
                If your Ualá was lost or stolen, make the report from the app
                and we will send you a new one within 15 business days.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <a target="_blank" href="https://www.youtube.com/watch?v=xD7xz3jyZ2A">
          <img src="images/videoCongelar.svg" alt="Video player" />
        </a>
      </div>
    </MarginContainer>
  );
}
