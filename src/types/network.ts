
export interface NetworkRequest {
    url: string;
    method: "GET" | "POST" | "PATCH";
    body?: string | Blob | FormData;
    omitAuth?: boolean;
}