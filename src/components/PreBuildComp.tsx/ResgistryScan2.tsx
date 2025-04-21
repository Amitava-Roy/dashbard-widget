export default function ResgistryScan2() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-base font-medium mb-4">Image Security Issues</h3>
      <div className="mb-2">
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold">2</span>
          <span className="text-sm text-gray-500 ml-2">Total Images</span>
        </div>
        <div className="space-y-4">
          <div className="h-2 w-full flex rounded-full overflow-hidden">
            <div className="h-full bg-red-900" style={{ width: "40%" }}></div>
            <div className="h-full bg-red-500" style={{ width: "40%" }}></div>
            <div
              className="h-full bg-yellow-500"
              style={{ width: "20%" }}
            ></div>
            <div className="h-full bg-gray-300" style={{ width: "0%" }}></div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-red-900"></div>
              <span>Critical (2)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-red-500"></div>
              <span>High (2)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-yellow-500"></div>
              <span>Medium (1)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-gray-300"></div>
              <span>Low (0)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
