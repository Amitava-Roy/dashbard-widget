export default function CspmPrebuild2() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-base font-medium mb-4">
        Cloud Account Risk Assessment
      </h3>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold">9659</div>
          <div className="text-sm text-gray-500">Total</div>
        </div>
        <div className="w-full space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
            <span className="text-sm">Failed (1889)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
            <span className="text-sm">Warning (581)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-300 rounded-sm"></div>
            <span className="text-sm">Not available (38)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
            <span className="text-sm">Passed (7253)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
