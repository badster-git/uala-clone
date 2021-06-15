import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";
import { FaChevronRight } from "react-icons/fa";

const useStyles = makeStyles({
  leftContainer: {
    flexBasis: "50%",
  },
  rightContainer: {
    flexBasis: "50%",
  },
  containerSubtitle: {
    fontSize: "16px",
    lineHeight: "1.5",
    fontWeight: "400",
    color: "#747474",
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
});

export default function InvestmentsDetails() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <div className={classes.containerSubtitle}>
          <div>Yield is calculated based on</div>
          <div>last 30 days and may vary daily in</div>
          <div>relation to the results.</div>
        </div>
        <div className={classes.investmentOptions}>
          <ul>
            <li>
              <FaChevronRight
                style={{
                  color: "#3e6bfd",
                  marginRight: "12px",
                  lineHeight: "1",
                  fontWeight: "900",
                }}
              />
              Invest and get your money instantly.
            </li>
            <li>
              <FaChevronRight
                style={{
                  color: "#3e6bfd",
                  marginRight: "12px",
                  lineHeight: "1",
                  fontWeight: "900",
                }}
              />
              From $1 and without limits.
            </li>
            <li>
              <FaChevronRight
                style={{
                  color: "#3e6bfd",
                  marginRight: "12px",
                  lineHeight: "1",
                  fontWeight: "900",
                }}
              />
              100% Transparent
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.image}>
          <img src="images/investmentPhone.svg" alt="Phone image" />
        </div>
      </div>
    </MarginContainer>
  );
}
