import type { FC } from "react";
import News from "@/components/shared-pages/news/news";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nyheter"
};

const NewsPage: FC = () => {

  return (
    <News />
  );
};

export default NewsPage;
