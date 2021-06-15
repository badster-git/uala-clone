import { makeStyles } from "@material-ui/styles";
import { USER_CARD_DATA } from "../../data/USER_CARD_DATA";
import UserCard from "../layouts/UserCard";

const useStyles = makeStyles({
  userContainer: {
    marginBottom: "120px",
  },
  innerContainer: {
    flexWrap: "wrap",
    display: "flex",
    width: "1080px",
    margin: "0 auto",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#3e6bfd",
    fontSize: "32px",
    width: "100%",
    marginBottom: "3rem",
  },
  titleSecondary: {
    fontSize: "28px",
    lineHeight: 1.4,
    fontWeight: "400",
    color: "#3a3a3a",
    width: "33%",
  },
  userComments: {
    flexBasis: "100%",
    display: "flex",
  },
});
export default function Users() {
  const classes = useStyles();
  let data = USER_CARD_DATA;
  return (
    <div className={classes.userContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.sectionTitle}>
          <h5 className={classes.titleSecondary}>Our users say</h5>
        </div>
        <div className={classes.userComments}>
          {data.map((d) => (
            <UserCard
              key={d.name}
              name={d.name}
              location={d.location}
              text={d.text}
              src={d.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
