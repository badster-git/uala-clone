import { makeStyles } from "@material-ui/styles";
import WaveContainer from "../layouts/WaveContainer";

const useStyles = makeStyles({
  phoneContainer: {
    width: "100%",
    margin: "72px 0",
    display: "flex",
    alignItems: "center",
  },
  innerContainer: {
    display: "flex",
    width: "1080px",
    margin: "0 auto",
    alignItems: "center",
  },
  leftContainer: {
    flexBasis: "50%",
  },
  rightContainer: {
    color: "#7b7b7b",
    flexBasis: "50%",
  },
  hashtag: {
    fontWeight: 600,
    color: "#3e6bfd",
  },
  quote: {
    fontSize: "42px",
    lineHeight: 1.4,
    fontWeight: 300,
  },
});

export default function Phone() {
  const classes = useStyles();
  return (
    <WaveContainer className={classes.phoneContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.leftContainer}>
          <img src="images/phone.svg" alt="Phone svg" />
        </div>
        <div className={`${classes.rightContainer} ${classes.quote}`}>
          <div>
            Manage your money how you want, when you want and where you want
            <br />
            <span className={classes.hashtag}>#TheGoodSideOfYourMoney</span>
          </div>
        </div>
      </div>
    </WaveContainer>
  );
}
