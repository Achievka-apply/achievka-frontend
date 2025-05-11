// src/api/api.ts

const BASE_API_URL = import.meta.env.VITE_API_BASE_URL

export const apiRequest = async ({
    route,
    method = "GET",
    body,
    params,
    token = localStorage.getItem("access_token"),
}: {
    route: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: unknown;
    params?: Record<string, string>;
    token?: string | null;
}) => {
    try {
        const url = new URL(`${BASE_API_URL}/${route}/`);
        if (params) {
            Object.entries(params).forEach(([key, value]) => 
                url.searchParams.append(key, value)
            )
        }

        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        }

        if(token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const request = new Request(url.toString(), {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
            credentials: "include",
        })

        const response = await fetch(request)

        console.log("Sending request...")

        const data = await response.json().catch(() => ({}));
        
        if (!response.ok) {
            throw new Error(data.message || `Request failed with status ${response.status}`);
        }
        
        return data
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

export const handleSendRequest = async () => {
    
}