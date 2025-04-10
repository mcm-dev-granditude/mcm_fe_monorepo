export interface PageProps<T, K = never> {
  params: Promise<T>;
  searchParams?: Promise<K>;
}