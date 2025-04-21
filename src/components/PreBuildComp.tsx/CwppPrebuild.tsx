import { Factory } from "lucide-react";

export default function CwppPrebuild({ text }: { text: string }) {
  return (
    <div className="bg-white p-4 rounded-lg  shadow-md">
      <h3 className="text-base font-medium mb-4">{text}</h3>
      <div className="flex flex-col items-center justify-center py-8">
        <div className="mb-2 text-gray-300">
          <Factory />
        </div>
        <p className="text-sm text-gray-500 text-center">
          No Graph data available!
        </p>
      </div>
    </div>
  );
}
