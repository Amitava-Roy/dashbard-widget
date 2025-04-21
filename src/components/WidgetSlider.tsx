import { X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateVisibilty } from "../redux/widgetDataSlice";

const buttons: { label: string; value: "cspm" | "cwpp" | "images" }[] = [
  { label: "CSPM", value: "cspm" },
  { label: "CWPP", value: "cwpp" },
  { label: "Image", value: "images" },
];

type WidgetItem = { name: string; isActive: boolean };
type WidgetState = {
  cspm: WidgetItem[];
  cwpp: WidgetItem[];
  images: WidgetItem[];
};

export default function WidgetSlider({
  setShowWidgetSlider,
}: {
  setShowWidgetSlider: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [activeSlide, setActiveSlide] = useState<"cspm" | "cwpp" | "images">(
    "cspm"
  );

  const widgetData = useSelector(
    (state: { widget: WidgetState }) => state.widget
  );
  const dispatch = useDispatch();

  const handleSaveToMemory = () => {
    localStorage.setItem("widgetData", JSON.stringify(widgetData));
    setShowWidgetSlider(false);
  };

  //input field value enter
  const handleCheckboxChange = (item: { name: string; isActive: boolean }) =>
    dispatch(
      updateVisibilty({
        type: activeSlide,
        name: item.name,
        value: !item.isActive,
      })
    );

  //handle input field change
  const handleInptFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: { name: string; isActive: boolean }
  ) =>
    dispatch(
      updateName({
        type: activeSlide,
        oldName: item.name,
        newName: e.target.value,
      })
    );

  return (
    <div className="fixed inset-0 bg-blend-color-burn bg-opacity-10 z-50 flex justify-end">
      <div className="bg-white w-full max-w-full sm:max-w-md h-full shadow-lg flex flex-col">
        <div className="bg-indigo-900 text-white px-4 py-3 flex items-center justify-between">
          <h2 className="font-medium">Add Widget</h2>
          <button
            onClick={() => setShowWidgetSlider(false)}
            className="text-white hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-auto">
          <p className="mb-4 text-gray-700">
            Personalise your dashboard by adding the following widget
          </p>

          {/* Tabs */}
          <div className="border-b mb-4 overflow-x-auto">
            <div className="flex whitespace-nowrap">
              {buttons.map((button) => (
                <button
                  key={button.label}
                  className={`px-4 py-2  font-medium ${
                    activeSlide == button.value
                      ? "border-b-2 border-indigo-900"
                      : ""
                  }`}
                  onClick={() => setActiveSlide(button.value)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          {/* Widget Options */}
          <div className="space-y-2">
            {widgetData[activeSlide]?.map(
              (item: { name: string; isActive: boolean }, id: number) => (
                <div
                  key={id}
                  className="border border-gray-200 px-3 rounded-md flex items-center"
                >
                  <input
                    type="checkbox"
                    id={`${id}`}
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={item.isActive}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  {activeSlide == "cspm" && id <= 1 ? (
                    <label id={`${id}`} className="my-3">
                      {item?.name}
                    </label>
                  ) : (
                    <input
                      type="text"
                      value={item?.name}
                      onChange={(e) => handleInptFieldChange(e, item)}
                      className="block w-full my-1 h-[32px] px-3 rounded-md border border-gray-300 shadow-sm focus:outline-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  )}
                </div>
              )
            )}
          </div>
        </div>

        <div className="border-t p-4 flex justify-end gap-2">
          <button
            onClick={() => setShowWidgetSlider(false)}
            className="px-4 py-2 border rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSaveToMemory()}
            className="px-4 py-2 bg-indigo-900 text-white rounded-md hover:bg-indigo-800"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
