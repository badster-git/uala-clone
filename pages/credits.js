import Layout from "../components/layouts/Layout.js";
import CreditsTop from "../components/credits/CreditsTop.js";
import CreditTabs from "../components/credits/CreditTabs.js";

export default function Card() {
  return (
    <Layout title="Ualá - Credits | Clone">
      <CreditsTop />
      <CreditTabs />
    </Layout>
  );
}
