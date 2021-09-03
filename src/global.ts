let host;
const env = process.env.NODE_ENV;

if (env === "development") host = "http://127.0.0.1:8000"
else if (env === "production") host = "https://bee6-41-80-19-75.ngrok.io";

export const apiV1 = host + "/api/v1";