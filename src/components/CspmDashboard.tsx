import React from "react";
import CspmPrebuild1 from "./PreBuildComp.tsx/CspmPrebuild1";
import CspmPrebuild2 from "./PreBuildComp.tsx/CspmPrebuild2";
import AddWidget from "./widget/AddWidget";
import { useSelector } from "react-redux";
import { WidgetState } from "../redux/widgetDataSlice";
import WidgetCard from "./ui/WidgetCard";

export default function CspmDashboard({
  setShowWidgetSlider,
}: {
  setShowWidgetSlider: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const widget = useSelector((state: { widget: WidgetState }) => state.widget);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-gray-700">
        CSPM Executive Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
        {widget?.cspm[0].isActive && <CspmPrebuild1 />}
        {widget?.cspm[1].isActive && <CspmPrebuild2 />}
        {widget?.cspm
          .filter((item, id) => id > 1 && item.isActive)
          .map((el) => (
            <WidgetCard key={el.name}>{el.name}</WidgetCard>
          ))}
        <AddWidget setShowWidgetSlider={setShowWidgetSlider} type="cspm" />
      </div>
    </div>
  );
}
