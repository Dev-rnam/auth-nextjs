import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HearderProps {
  label: string;
}

export const Header = ({ label }: HearderProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-y-4 justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔐Auth</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
