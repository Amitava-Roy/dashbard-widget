import React from "react";
import AddWidget from "./widget/AddWidget";
import RegistryScan1 from "./PreBuildComp.tsx/RegistryScan1";
import ResgistryScan2 from "./PreBuildComp.tsx/ResgistryScan2";
import { useSelector } from "react-redux";
import { WidgetState } from "../redux/widgetDataSlice";
import WidgetCard from "./ui/WidgetCard";

export default function RegistryScan({
  setShowWidgetSlider,
}: {
  setShowWidgetSlider: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const widget = useSelector((state: { widget: WidgetState }) => state.widget);

  return (
    <div className="col-span-3">
      <h2 className="text-lg font-semibold mb-4">Registry Scan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
        {widget?.images[0].isActive && <RegistryScan1 />}
        {widget?.images[1].isActive && <ResgistryScan2 />}
        {widget?.images
          .filter((item, id) => id > 1 && item.isActive)
          .map((el) => (
            <WidgetCard key={el.name}>{el.name}</WidgetCard>
          ))}

        {/* Empty Widget */}
        <AddWidget setShowWidgetSlider={setShowWidgetSlider} type="images" />
      </div>
    </div>
  );
}
