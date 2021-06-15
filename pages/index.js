import Layout from "../components/layouts/Layout";
import Head from "next/head";
import IndexTop from "../components/index/IndexTop";
import HowToJoin from "../components/index/HowToJoin";
import Uses from "../components/index/Uses";
import Phone from "../components/index/Phone";
import Users from "../components/index/Users";
import CustomerSupport from "../components/index/CustomerSupport";

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
