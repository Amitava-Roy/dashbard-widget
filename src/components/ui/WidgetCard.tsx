import { ReactNode } from "react";

interface WidgetCardProps {
  children: ReactNode;
}

export default function WidgetCard({ children }: WidgetCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg  shadow-md flex items-center justify-center">
      {children}
    </div>
  );
}
