import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  leftContainer: {
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
  transferLogos: {
    marginTop: "32px",
    display: "flex",
    flexWrap: "wrap",
    "& img": {
      flexBasis: "40%",
      margin: "8px",
      maxHeight: "100px",
    },
  },
});

export default function HowToReload() {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <div className={classes.transferTypeContainer}>
          <div className={classes.transferIcon}>
            <img src="images/money-icon.png" alt="Money Icon" />
          </div>
          <div className={classes.titleSecondary}>How to reload your card?</div>
          <div className={classes.texts}>
            <div>In cash or by transfer.</div>
            <div>It is simple and fast.</div>
          </div>
          <div className={classes.transferLogos}>
            <img src="images/rapipago.svg" alt="Rapipago Icon" />
            <img src="images/pagofacil.svg" alt="Pagofacil Icon" />
            <img src="images/telerecargas.svg" alt="Telerecargas Icon" />
            <img src="images/cobro-express.svg" alt="Cobro Express Icon" />
            <img src="images/cvu-cbu.svg" alt="CVU/CBU Icon" />
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=6Bv0IdBFdDc&amp;list=PLg1PUEcEHPueiDhoFPqixtG5qR1--cjAg&amp;index=25"
        >
          <img src="images/videoCargar.svg" alt="Video player" />
        </a>
      </div>
    </MarginContainer>
  );
}
