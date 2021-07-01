import TopSection from "../layouts/TopSection";

export default function CostAnalysisTop() {
  return (
    <TopSection
      title="Analayze your costs"
      subtitle={[
        "Understand what you spend in order to better manage your money. All your consumptions are automatically grouped by categories so that you can analyze them on a monthly or annual basis.",
      ]}
      blue=""
      src="images/analysis.gif"
      mid={true}
    />
  );
}
