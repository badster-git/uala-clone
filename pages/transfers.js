import Layout from "../components/layouts/Layout.js";
import TransfersTop from "../components/transfers/TransfersTop.js";
import TransferDetails from "../components/transfers/TransferDetails.js";
import TransferSecurity from "../components/transfers/TransferSecurity.js";

export default function Payments() {
  return (
    <Layout title="Ualá - Transfers | Clone">
      <TransfersTop />
      <TransferDetails />
      <TransferSecurity />
    </Layout>
  );
}
