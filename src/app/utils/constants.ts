export const DOMAIN_NAME = "commoner.com";

const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
const host =
  process.env.NODE_ENV === "development"
    ? "localhost:3000"
    : process.env.VERCEL_ENV === "production"
      ? DOMAIN_NAME
      : process.env.VERCEL_URL;
export const PROTOCOL_AND_HOST = `${protocol}://${host || DOMAIN_NAME}`;