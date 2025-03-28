export const getWebServerUrl = (): string => {
  if (process.env.NODE_ENV === "production") {
    return process.env.EXPO_PUBLIC_VERCEL_URL || "";
  }

  return process.env.EXPO_PUBLIC_LOCAL_SERVER_IP || process.env.EXPO_PUBLIC_VERCEL_URL || ""; // (eg. 192.168.8.183:3000)
};
