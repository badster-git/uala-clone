import MarginContainer from "../layouts/MarginContainer";
import Link from "../layouts/Link";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  blueText: {
    color: theme.palette.common.mainBlue,
    marginRight: ".5rem",
    textDecoration: "none",
  },
  image: {
    "& img": {
      width: "100%",
    },
  },
  full: {
    flexBasis: "100%",
  },
}));

export default function HowToReload() {
  const classes = useStyles();
  return (
    <MarginContainer container="wrapContainer" alignStyle="cleanPaddingTop">
      <div className={classes.full}>
        <a
          href="http://www.usuariosfinancieros.gob.ar"
          alt="User Finance government site"
        >
          <img
            style={{ maxWidth: "450px" }}
            src="images/imagen-bcra-usuarios-financieros.png"
            alt="User Finance image"
          />
        </a>
      </div>
      <Link className={classes.blueText} href="/user-finance-information">
        User Finance information
      </Link>
    </MarginContainer>
  );
}
