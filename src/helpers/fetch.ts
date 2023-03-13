import axios, { Method } from "axios";

export async function fetch<Response, Payload = undefined>(
    url: string,
    method: Method,
    payload?: Payload
) {
    const { data } = await axios.request<Response>({
        data: payload,
        method,
        url
    });

    return data;
}
