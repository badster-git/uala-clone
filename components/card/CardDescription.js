import MarginContainer from "../layouts/MarginContainer";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  leftContainer: {
    flexBasis: "50%",
  },
  rightContainer: {
    flexBasis: "50%",
  },
  sectionCardTitle: {
    marginRight: "15%",
    marginTop: "4rem",
    fontSize: "48px",
    fontWeight: 500,
    lineHeight: 1.4,
    color: "#3a3a3a",
  },
  titleSecondary: {
    fontSize: "28px",
    lineHeight: "1.4px",
    fontWeight: "400",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "20px",
    lineHeight: 1.5,
    fontWeight: 400,
    color: "#747474",
  },
});

export default function CardDescription() {
  const classes = useStyles();
  return (
    <MarginContainer alignStyle={"alignCenterDesktop"}>
      <div className={classes.leftContainer}>
        <div>
          <img src="images/card2.gif" alt="Card animation" />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.sectionCardTitle}>
          <h1 className={classes.titleSecondary}>The Card</h1>
        </div>
        <div className={classes.subtitle}>
          An international prepaid Mastercard card designed to have the best
          shopping experience. With a chip, so that your information is more
          protected than ever and contactless technology, so that your purchases
          are much safer.
        </div>
      </div>
    </MarginContainer>
  );
}
