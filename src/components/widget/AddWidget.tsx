import { Plus } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { addNewWidget } from "../../redux/widgetDataSlice";

export default function AddWidget({
  setShowWidgetSlider,
  type,
}: {
  setShowWidgetSlider: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded-lg border border-dashed flex items-center justify-center">
      <button
        onClick={() => {
          dispatch(addNewWidget({ type }));
          setShowWidgetSlider(true);
        }}
        className="flex items-center gap-1 px-2 py-1 border rounded hover:bg-gray-50 text-xs"
      >
        <Plus className="h-3 w-3" />
        <span className="hidden sm:inline">Add Widget</span>
      </button>
    </div>
  );
}
