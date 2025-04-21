import {
  Plus,
  RefreshCw,
  ChevronDown,
  EllipsisVertical,
  Clock4,
} from "lucide-react";
import CspmDashboard from "./CspmDashboard";
import CwppDashboard from "./CwppDashboard";
import RegistryScan from "./RegistryScan";
export default function Dashboard({
  setShowWidgetSlider,
}: {
  setShowWidgetSlider: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <main className="p-3 sm:p-6 bg-blue-50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold">CNAPP Dashboard</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowWidgetSlider(true)}
            className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Widget</span>
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-100">
            <RefreshCw className="h-5 w-5" />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-100">
            <EllipsisVertical className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 border rounded-md px-3 py-2">
            <Clock4 className="w-5 h-5" />
            <span className="hidden sm:inline">Last 2 days</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="flex flex-col gap-8">
        <CspmDashboard setShowWidgetSlider={setShowWidgetSlider} />

        {/* CWPP Dashboard Section */}
        <CwppDashboard setShowWidgetSlider={setShowWidgetSlider} />
        {/* Registry Scan Section */}
        <RegistryScan setShowWidgetSlider={setShowWidgetSlider} />
      </div>
    </main>
  );
}
