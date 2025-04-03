import type { FC } from "react";

interface ContentfulPageNotFoundProps {
  title: string;
  slug: string;
}

const ContentfulPageNotFound: FC<ContentfulPageNotFoundProps> = ({title, slug}) => {

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to {title}</h1>
      <p className="text-lg font-medium">Content not found. Please configure the slug (&#34;{slug}&#34;) in
                                         Contentful.</p>
    </main>
  );
};

export default ContentfulPageNotFound;
