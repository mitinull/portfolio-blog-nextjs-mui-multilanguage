const isDevelopment = process.env.NODE_ENV === "development";

export const ROOT_URL = isDevelopment
  ? "http://localhost:3000"
  : "https://mitinull.vercel.app";
