import { makeStyles } from "@material-ui/styles";

import Layout from "../components/layouts/Layout.js";
import CardTop from "../components/card/CardTop";

const useStyles = makeStyles({
  marginContainer: {
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: "64px",
    paddingTop: "0px",
    flexDirection: "column",
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "90px 0",
  },
});
export default function Card() {
  const classes = useStyles();
  return (
    <Layout title="Ualá - Card | Clone">
      <CardTop />
    </Layout>
  );
}
