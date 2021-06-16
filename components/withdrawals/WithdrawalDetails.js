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
    marginBottom: "1rem",
  },
  transferTypeContainerLeft: {
    marginRight: "48px",
  },
  transferTypeContainerRight: {
    marginLeft: "48px",
  },
  transferTitle: {
    marginTop: "32px",
    marginBottom: "16px",
  },
  flexContent: {
    display: "flex",
  },
  texts: {
    fontSize: "20px",
    lineHeight: "1.5",
    fontWeight: "400",
    color: "#747474",
  },
  textCenter: {
    textAlign: "center",
    marginTop: "1rem",
  },
  grid: {
    display: "grid",
    marginTop: "1.5rem",
    width: "100%",
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
  },
  column: {
    gridColumn: "span 1/span 1",
  },
  logoContainer: {
    justifyContent: "center",
    display: "flex",

    "& img": {
      height: "4rem",
    },
  },
  transferIcon: {
    "& img": {
      width: "68px",
    },
  },
});

export default function CardDescription() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <div className={classes.transferTypeContainerLeft}>
          <div className={classes.transferIcon}>
            <img src="images/icono-efectivo.png" alt="Money icon" />
          </div>
          <div className={`${classes.transferTitle} ${classes.titleSecondary}`}>
            Withdrawal amounts
          </div>
          <div className={`${classes.flexContent} ${classes.texts}`}>
            <div className={classes.grid}>
              <div className={classes.column}>
                <div className={classes.logoContainer}>
                  <img src="images/link.png" alt="Link logo" />
                </div>
                <div className={classes.textCenter}>$8,500 every 24 hours.</div>
              </div>
              <div className={classes.column}>
                <div className={classes.logoContainer}>
                  <img src="images/banelco.jpg" alt="Banelco logo" />
                </div>
                <div className={classes.textCenter}>$8,500 every 24 hours.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.transferTypeContainerRight}>
          <div className={classes.transferIcon}>
            <img src="images/extractIcon1.svg" alt="Withdraw icon" />
          </div>
          <div className={`${classes.transferTitle} ${classes.titleSecondary}`}>
            Costs
          </div>
          <div className={classes.texts}>
            <div className="mid">
              You have one free extraction per month. The rest have a cost of
              $105 + VAT that will be charged from your balance when you make
              the withdrawal.
            </div>
          </div>
        </div>
      </div>
    </MarginContainer>
  );
}
