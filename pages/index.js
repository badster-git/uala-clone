import Layout from "../components/layout";
import Head from "next/head";
import IndexTop from "../components/IndexTop";
import HowToJoin from "../components/HowToJoin";
import Uses from "../components/Uses";
import Phone from "../components/Phone";
import Users from "../components/Users";
import CustomerSupport from "../components/CustomerSupport";

export default function Index() {
  return (
    <Layout title="Ualá | Clone">
      <IndexTop />
      <HowToJoin />
      <Uses />
      <Phone />
      <Users />
      <CustomerSupport />
    </Layout>
  );
}
