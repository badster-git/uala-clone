import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  marginContainer: {
    display: "flex",
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "90px 0",
    "&.homeContainer": {
      marginBottom: "120px",
    },
  },
  leftContainer: {
    flexBasis: "50%",
  },
  titlePrimary: {
    marginRight: "15%",
    marginTop: "4rem",
    fontSize: "48px",
    fontWeight: 500,
    lineHeight: 1.4,
    color: "#3e6bfd",
  },
  subtitle: {
    fontSize: "22px",
    lineHeight: 1.5,
    fontWeight: 400,
    color: "grey",
  },
  stores: {
    display: "flex",
    alignItems: "center",
    marginTop: "24px",
  },
  store: {
    marginRight: "32px",
  },
});

export default function IndexTop() {
  const classes = useStyles();
  return (
    <section className={`homeContainer ${classes.marginContainer}`}>
      <div className={classes.leftContainer}>
        <h3 className={classes.titlePrimary}>
          We're the good side of your money.
        </h3>
        <div className={classes.subtitle}>
          <div>One app and one card</div>
          <div>from Mastercard to manage</div>
          <div>your money easily.</div>
        </div>
        <div className={classes.stores}>
          <a
            className={classes.store}
            href="https://play.google.com/store/apps/details?id=ar.com.bancar.uala&hl=es_AR&gl=US"
          >
            <img src="/images/playstore.svg" alt="Playstore icon" />
          </a>
          <a
            className={classes.store}
            href="https://apps.apple.com/ar/app/ual%C3%A1/id1279808159"
          >
            <img src="/images/apple-store.svg" alt="Apple icon" />
          </a>
        </div>
      </div>
      <div>
        <div>
          <img src="/images/home.gif" alt="Home animation" />
        </div>
      </div>
    </section>
  );
}
