import TopSection from "./layouts/TopSection";
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

export default function CardTop() {
  const classes = useStyles();
  return (
    <TopSection
      title={"A card for everyone for everything"}
      subtitle={"Buy in any store or any online site that accepts Mastercard."}
      blue={["Remember:", "If they accept Mastercard, they accept Ualá."]}
      src={"images/card.gif"}
    />
  );
}
