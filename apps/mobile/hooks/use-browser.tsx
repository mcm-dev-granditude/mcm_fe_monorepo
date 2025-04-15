import { useRouter } from "expo-router";

export function useBrowser() {
  const router = useRouter();

  const openBrowser = (url: string) => {
    router.push({
      pathname: "/browser",
      params: {url}
    });
  };

  return {openBrowser};
}