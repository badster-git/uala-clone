import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    flexBasis: "50%",
  },
  rightContainer: {
    flexBasis: "50%",
  },
  containerSubtitle: {
    fontSize: "22px",
    lineHeight: "1.5",
    fontWeight: "400",
    color: "#747474",
    [theme.breakpoints.up("mt")]: {
      width: "75%",
    },
  },
  investmentOptions: {
    marginTop: "32px",
    lineHeight: "3",
    color: "#787878",
    fontSize: "18px",
  },
  transferIcon: {
    "& img": {
      width: "68px",
    },
  },
  image: {
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },
  title: {
    [theme.breakpoints.up("mt")]: {
      width: "75%",
    },
  },
}));

export default function CostAnalysisDetails() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <div>
          <h1
            className={classes.title}
            style={{
              fontWeight: "600",
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              marginBottom: "1rem",
              margin: 0,
            }}
          >
            See your spending details
          </h1>
        </div>
        <div className={classes.containerSubtitle}>
          <span>
            Every time you pay with your Ualá, you receive a live notification
            and the amount spent is categorized so that you can see more clearly
            what you spent on.
          </span>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.image}>
          <img src="images/analysis-phone.svg" alt="Phone image" />
        </div>
      </div>
    </MarginContainer>
  );
}
