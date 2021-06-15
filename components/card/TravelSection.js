import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  leftContainer: {
    flexBasis: "50%",
  },
  rightContainer: {
    flexBasis: "50%",
  },
  titleSecondary: {
    fontSize: "28px",
    lineHeight: "1.4",
    fontWeight: "400",
    color: "#3a3a3a",
    marginTop: "32px",
    marginBottom: "16px",
  },
  containerSubtitle: {
    fontSize: "22px",
    lineHeight: "1.5",
    fontWeight: "400",
  },
  texts: {
    fontSize: "20px",
    lineHeight: "1.5",
    fontWeight: "400",
    color: "#747474",
  },
});

export default function TravelSection() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <div className={classes.image}>
          <img src="images/card4.gif" alt="Card Travel Animation" />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.titleSecondary}>Take your Ualá on a trip</div>
        <div className={classes.containerSubtitle}>
          <div className={classes.texts}>
            Make the notice of travel through the app and purchase using Ualá
            anywhere in the world anytime of day.
          </div>
        </div>
      </div>
    </MarginContainer>
  );
}
