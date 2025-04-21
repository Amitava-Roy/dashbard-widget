export default function CspmPrebuild1() {
  return (
    <div className="bg-white p-4 rounded-lg  shadow-md">
      <h3 className="text-base font-medium mb-4">Cloud Accounts</h3>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold">2</div>
          <div className="text-sm text-gray-500">Total</div>
        </div>
        <div className="w-full space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
            <span className="text-sm">Connected (2)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-100 rounded-sm"></div>
            <span className="text-sm">Not Connected (2)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
