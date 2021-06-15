import Layout from "../components/layouts/Layout.js";
import CardTop from "../components/card/CardTop";
import CardDescription from "../components/card/CardDescription.js";
import HowToReload from "../components/card/HowToReload.js";
import TravelSection from "../components/card/TravelSection.js";
import LostOrStolen from "../components/card/LostOrStolen.js";

export default function Card() {
  return (
    <Layout title="Ualá - Card | Clone">
      <CardTop />
      <CardDescription />
      <HowToReload />
      <TravelSection />
      <LostOrStolen />
    </Layout>
  );
}
