import Home from "@/components/shared-pages/home/home";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hemsida"
};

export default function HomePage() {
  return (
    <Home />
  );
}