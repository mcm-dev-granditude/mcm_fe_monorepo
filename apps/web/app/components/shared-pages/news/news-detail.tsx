import type { FC } from "react";

interface NewsDetailProps {
  slug: string;
}

const NewsDetail: FC<NewsDetailProps> = ({slug}) => {

  return (
    <div className="flex flex-col">
      <h1>{slug}</h1>
    </div>
  )
    ;
};

export default NewsDetail;
