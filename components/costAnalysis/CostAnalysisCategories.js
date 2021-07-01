import MarginContainer from "../layouts/MarginContainer";
import { CATEGORY_CARD_DATA } from "../../data/CATEGORY_CARD_DATA";

import { makeStyles } from "@material-ui/styles";
import { Grid, Paper } from "@material-ui/core";

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
    [theme.breakpoints.up("mf")]: {
      marginTop: "0",
    },
    [theme.breakpoints.up("mt")]: {
      width: "75%",
    },
  },
  categoryList: {
    padding: "16px",
  },
  category: {
    flexBasis: "calc(100% / 4)",
    display: "flex",
    flexWrap: "wrap",
    margin: "32px 0",
  },
  transferContent: {
    fontSize: "20px",
    lineHeight: "1.5",
    fontWeight: "400",
  },
}));

export default function CostAnalysisCategories() {
  const classes = useStyles();
  const categories = CATEGORY_CARD_DATA;
  return (
    <MarginContainer alignStyle="alignCenter">
      <div className={classes.leftContainer}>
        <div>
          <h1
            className={classes.title}
            style={{
              fontWeight: "500",
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              marginBottom: "2rem",
            }}
          >
            How your spending is categorized
          </h1>
          <Paper elevation={6} style={{ borderRadius: "8px" }}>
            <Grid container className={classes.categoryList} spacing={1}>
              {categories.map((category) => (
                <Grid key={category.id} item className={classes.category}>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "flex-start",
                      display: "flex",
                      flexBasis: "100%",
                      marginBottom: "8px",
                    }}
                  >
                    <img
                      src={category.src}
                      alt={`${category.name} rounded icon`}
                      height="auto"
                      style={{ maxWidth: "100%", width: "3rem" }}
                    />
                  </div>
                  <div
                    style={{
                      flexBasis: "100%",
                      textAlign: "center",
                      color: "#6e6e6e",
                    }}
                  >
                    {category.name}
                  </div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div style={{ marginLeft: "48px" }}>
          <div>
            <img src="images/edit-icon.svg" alt="Edit svg" width="48px" />
          </div>
          <div
            style={{
              marginTop: "2rem",
              fontSize: "20px",
              lineHeight: "1.5",
              fontWeight: "400",
              color: "#747474",
            }}
          >
            <p>
              You can modify the category of a purchase by clicking on the
              purchase from the app and then on the pencil icon.
            </p>
          </div>
        </div>
      </div>
    </MarginContainer>
  );
}
