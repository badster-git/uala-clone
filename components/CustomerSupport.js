import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  attentionContainer: {
    padding: "0",
    marginBottom: "-280px",
    maxWidth: "1080px",
    margin: "0 auto",
    display: "flex",
  },
  leftContainer: {
    flexBasis: "50%",
    "& p": {
      marginRight: "20%",
      marginBottom: ".5rem",
      "& a": {
        textDecoration: "none",
      },
    },
  },
  rightContainer: {
    flexBasis: "50%",
  },
  sectionTitle: {
    width: "100%",
    color: "#3e6bfd",
    fontSize: "32px",
  },
  titleSecondary: {
    fontSize: "28px",
    lineHeight: 1.4,
    fontWeight: 400,
    color: "#3a3a3a",
    marginBottom: "2rem",
  },
  textBlue: {
    color: "#5482f6",
  },
  image: {
    width: "100%",
    "& img": {
      width: "100%",
      maxWidth: "100%",
      height: "auto",
    },
  },
});

export default function CustomerSupport() {
  const classes = useStyles();
  return (
    <div className={classes.attentionContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.sectionTitle}>
          <h3 className={classes.titleSecondary}>100% Attention online</h3>
        </div>
        <p>
          If you have questions, ask us! If you are a Ualá user, write to us
          through the chat,
        </p>
        <p>
          If you have not yet done so, email us at{" "}
          <a className={classes.textBlue} href="mailto:hola@uala.com.ar">
            hola@uala.com.ar
          </a>{" "}
          or follow our social medias
        </p>
        <p>
          You can also look at the{" "}
          <a
            className={classes.textBlue}
            target="_BLANK"
            href="http://comunidad.uala.com.ar"
          >
            Ualá Community
          </a>{" "}
          to find more information.
        </p>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.image}>
          <img
            src="images/cellphone-contact.png"
            alt="Cellphone with contact info"
          />
        </div>
      </div>
    </div>
  );
}
