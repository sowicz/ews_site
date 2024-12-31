import ChartBars1 from "./ChartBars1";
import ChartBars2 from "./ChartBars2";
import ChartPie1 from "./ChartPie1";
import ShadowChart from "./ShadowChart";

export default function HeroSidePart() {
  return (
    <div className="lg:w-1/2 w-full mx-auto flex space-x-4 flex-wrap justify-center content-center z-2">
      <ShadowChart />
      <ChartBars1 />
      <ChartBars2 />
      <ChartPie1 />
    </div>
  )

}