import { Bell, ChevronDown, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="shadow-sm shadow-blue-300 bg-white">
      <div className="flex flex-col sm:flex-row h-auto sm:h-14 items-start sm:items-center px-4 py-3 sm:py-0">
        <div className="mr-auto mb-3 sm:mb-0">
          <nav className="flex">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#" className="text-blue-600 font-medium">
              Dashboard V2
            </a>
          </nav>
        </div>
        <div className="relative w-full sm:w-96 mb-3 sm:mb-0">
          <input
            type="search"
            placeholder="Search anything..."
            className="w-full rounded-lg bg-gray-100 border-none pl-10 py-2 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Search className="text-gray-400 max-md:w-4 max-md:h-4 w-6 h-6" />
          </div>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start sm:ml-4">
          <div className="relative">
            <button className="flex items-center gap-2 px-3 py-1 border rounded-md">
              <span>Current User</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
