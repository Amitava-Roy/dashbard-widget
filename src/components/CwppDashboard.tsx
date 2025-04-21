import { useSelector } from "react-redux";
import CwppPrebuild from "./PreBuildComp.tsx/CwppPrebuild";
import AddWidget from "./widget/AddWidget";
import { WidgetState } from "../redux/widgetDataSlice";
import WidgetCard from "./ui/WidgetCard";

export default function CwppDashboard({
  setShowWidgetSlider,
}: {
  setShowWidgetSlider: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const widget = useSelector((state: { widget: WidgetState }) => state.widget);
  console.log(widget);
  return (
    <div className="col-span-3">
      <h2 className="text-lg font-semibold mb-4">CWPP Dashboard:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
        {/* Top 5 Namespace Specific Alerts */}
        {widget?.cwpp[0].isActive && (
          <CwppPrebuild text="Top 5 Namespace Specific alerts" />
        )}
        {/* Workload Alerts */}
        {widget?.cwpp[1].isActive && <CwppPrebuild text="Work Alerts" />}
        {widget?.cwpp
          .filter((item, id) => id > 1 && item.isActive)
          .map((el) => (
            <WidgetCard key={el.name}>{el.name}</WidgetCard>
          ))}
        <AddWidget setShowWidgetSlider={setShowWidgetSlider} type="cwpp" />
      </div>
    </div>
  );
}
