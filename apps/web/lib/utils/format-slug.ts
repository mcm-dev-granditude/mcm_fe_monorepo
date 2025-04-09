export const formatSlug = (slug: string): string => {
  const decodedSlug = decodeURIComponent(slug);
  return decodedSlug.startsWith("/") ? decodedSlug : `/${decodedSlug}`;
};
