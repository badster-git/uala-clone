import Layout from "../components/layouts/Layout.js";
import CostAnalysisTop from "../components/costAnalysis/CostAnalysisTop";
import CostAnalysisDetails from "../components/costAnalysis/CostAnalysisDetails.js";
import CostAnalysisCategories from "../components/costAnalysis/CostAnalysisCategories.js";

export default function CostAnalysis() {
  return (
    <Layout title="Ualá - Cost Analysis | Clone">
      <CostAnalysisTop />
      <CostAnalysisDetails />
      <CostAnalysisCategories />
    </Layout>
  );
}
