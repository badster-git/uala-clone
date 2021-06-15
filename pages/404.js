import Layout from "../components/layouts/Layout";
import Link from "../components/layouts/Link";

import { makeStyles } from "@material-ui/styles";
import { Container, Grid, Button } from "@material-ui/core";

const useStyle = makeStyles({
  errorContainer: {
    height: "80vh",
  },
  titlePrimary: {
    color: "#3e6bfd",
  },
  titleSecondary: {
    color: "#3a3a3a",
  },
  titleTertiary: {
    color: "#707070",
  },
});

export default function Profiles() {
  const classes = useStyle();

  return (
    <Layout title="Error | Ualá Clone">
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.errorContainer}
      >
        <Grid item>
          <h1 className={classes.titlePrimary}>Lost your way?</h1>
        </Grid>
        <Grid item>
          <h3 className={classes.titleSecondary}>
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </h3>
        </Grid>
        <Grid item>
          <Link href="/">
            <Button className={classes.btn}>Ualá Home</Button>
          </Link>
        </Grid>
        <Grid item>
          <h5 className={classes.titleTertiary}>
            This page may be currently under development. Check back later.
          </h5>
        </Grid>
      </Grid>
    </Layout>
  );
}
