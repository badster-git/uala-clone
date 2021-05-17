import Link from "./Link";
import { makeStyles } from "@material-ui/styles";
import { SiInstagram } from "react-icons/si";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const useStyles = makeStyles({
  footerContainer: {
    width: "100%",
    position: "absolute",
  },
  grayTopWaveContainer: {
    marginTop: "128px",
    background:
      "url(images/waveTopDesktopGray.svg) top /100% auto, linear-gradient(#eeeeee, #eeeeee) content-box",
    backgroundRepeat: "no-repeat",
    paddingTop: "4vw",
  },
  marginContainer: {
    padding: "0",
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: "64px",
    maxWidth: "1080px",
    margin: "0 auto",
  },
  footerBrand: {
    flexBasis: "calc(100% / 3)",
    height: "calc(100% - 42px)",
    display: "flex",
    alignContent: "flex-end",
    paddingBottom: "42px",
    flexWrap: "wrap",
  },
  footerMap: {
    flexBasis: "calc(100% / 3)",
    height: "calc(100% - 42px)",
    display: "flex",
    alignContent: "flex-end",
    paddingBottom: "42px",
    flexWrap: "wrap",
  },
  footerMapList: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    margin: 0,
    padding: 0,
    "& li": {
      flexBasis: "100%",
      marginBottom: "12px",
    },
  },
  gray: {
    color: "#656565",
  },
  textBlue: {
    color: "#3e6bfd",
  },
  stickers: {
    color: "#3e6bfd",
    fontSize: "14px",
    marginTop: "64px",
  },
  footerCopy: {
    flexBasis: "calc(100% / 3)",
    height: "calc(100% - 42px)",
    display: "flex",
    alignContent: "flex-end",
    paddingBottom: "42px",
    flexWrap: "wrap",
  },
  aaipContainer: {
    gridTemplateColumns: "repeat(8, minmax(0,1fr))",
    display: "grid",
  },
  aaipLeft: {
    gridColumn: "span 2/span 2",
    marginRight: "16px",
    "& img": {
      maxWidth: "100%",
      height: "auto",
      display: "block",
      verticalAlign: "middle",
    },
  },
  aaipRight: {
    gridColumn: "span 6/span 6",
    color: "#6b6b6b",
  },
  brandLogo: {
    flexBasis: "100%",
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },
  brandSocial: {
    flexBasis: "100%",
    marginTop: "24px",
    fontSize: "32px",
    "& a": {
      color: "#9a9a9a",
      marginRight: "5px",
    },
  },
  appDownloadLinks: {
    flexBasis: "100%",
    display: "flex",
    marginTop: "72px",
  },
  appDownload: {
    marginRight: "12px",
  },
  ualaLocation: {
    fontSize: "14px",
    color: "#737373",
    marginTop: "64px",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.grayTopWaveContainer}>
        <div className={classes.marginContainer}>
          <div className={classes.footerBrand}>
            <div className={classes.brandLogo}>
              <img src="images/logo2.png" alt="Uala Logo" />
            </div>
            <div className={classes.brandSocial}>
              <a target="_BLANK" href="https://www.instagram.com/uala_arg/">
                <SiInstagram />
              </a>
              <a target="_BLANK" href="https://www.facebook.com/uala.arg/">
                <FaFacebookSquare />
              </a>
              <a target="_BLANK" href="https://twitter.com/uala_arg">
                <FaTwitter />
              </a>
              <a
                target="_BLANK"
                href="https://www.linkedin.com/company/ual%C3%A1/"
              >
                <FaLinkedin />
              </a>
              <a
                target="_BLANK"
                href="https://www.youtube.com/channel/UCYFkMsPU2HvERxI-gHqzLxg"
              >
                <FaYoutube />
              </a>
            </div>
            <div className={classes.appDownloadLinks}>
              <a
                href="https://uala.onelink.me/Mhko/49dd979f"
                className={classes.appDownload}
              >
                <img src="/images/applestore.png" alt="" />
              </a>
              <a
                href="https://uala.onelink.me/Mhko/49dd979f"
                className={classes.appDownload}
              >
                <img src="images/androidstore.png" alt="" />
              </a>
            </div>
          </div>
          <div className={classes.footerMap}>
            <ul className={classes.footerMapList}>
              <li>
                <Link href="/jobs" className={classes.gray}>
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/tyc.html" className={classes.gray}>
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  target="_BLANK"
                  href="http://comunidad.uala.com.ar"
                  className={classes.gray}
                >
                  Ualá Community
                </Link>
              </li>
              <li>
                <Link href="/privacy.html" className={classes.gray}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  target="_BLANK"
                  href="http://blog.uala.com.ar"
                  className={classes.gray}
                >
                  Ualá Blog
                </Link>
              </li>
              <li>
                <Link href="/contracts" className={classes.gray}>
                  Contratos de Adhesión - Ley N° 24.240 de Defensa del
                  Consumidor
                </Link>
              </li>
              <li>
                <Link href="#" className={classes.gray}>
                  Consumer Defense
                </Link>
              </li>
            </ul>
            <Link
              target="_BLANK"
              href="http://sticker.ly/s/OO1MGN"
              className={classes.stickers}
            >
              Download our WhatsApp stickers
            </Link>
          </div>
          <div className={classes.footerCopy}>
            <div className={classes.aaipContainer}>
              <div className={classes.aaipLeft}>
                <img src="images/aaip.png" />
              </div>
              <div className={classes.aaipRight}>
                Ualá is a Payment Service Provider and is not authorized by the
                BCRA to operate as a financial entity.{" "}
                <Link href="/legal" className={classes.textBlue}>
                  More info here
                </Link>
                {"."}
              </div>
            </div>
            <div className={classes.ualaLocation}>
              <div>ALAU TECNOLOGÍA S.A.U. - CUIT 30-71542170-0</div>
              <div>Ualá © 2020 , Todos los derechos reservados.</div>
              <div>Nicaragua 4677 , C1414BVG CABA, Argentina.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
