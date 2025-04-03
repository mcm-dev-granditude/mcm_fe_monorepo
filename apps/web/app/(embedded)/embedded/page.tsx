import Home from "@/components/shared-pages/home/home";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hemsida"
};

export default function HomePage() {
  return (
    <Home className="min-h-auto pb-6" />
  );
}