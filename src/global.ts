let host;
const env = process.env.NODE_ENV;

if (env === "development") host = "http://127.0.0.1:8000"
else if (env === "production") host = "https://fce2cde3867b.ngrok.io";

export const apiV1 = host + "/api/v1";