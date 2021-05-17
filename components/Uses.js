import { makeStyles } from "@material-ui/styles";
import UsesCard from "./UsesCard";
import { USES_CARD_DATA } from "../data/USES_CARD_DATA";

const useStyles = makeStyles({
  sectionTitle: {
    width: "1080px",
    margin: "auto",
  },
  titleTertiary: {
    fontSize: "24px",
    lineHeight: 1.4,
    fontWeight: "400",
    color: "#3e6bfd",
  },
  titleSecondary: {
    fontSize: "28px",
    lineHeight: 1.4,
    fontWeight: "400",
    color: "#3a3a3a",
    width: "33%",
  },
  marginContainer: {
    padding: 0,
    flexWrap: "wrap",
    maxWidth: "1080px",
    margin: "0 auto",
    display: "flex",
  },
  boxList: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "16px",
    flexBasis: "100%",
  },
});

export default function Uses() {
  const classes = useStyles();
  let data = USES_CARD_DATA;
  return (
    <section>
      <div className={classes.sectionTitle}>
        <h5 className={classes.titleSecondary}>Things you can do with Ualá</h5>
      </div>
      <div className={classes.marginContainer}>
        <div className={classes.boxList}>
          {data.map((d) => (
            <UsesCard key={d.title} title={d.title} text={d.text} src={d.src} href={d.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
