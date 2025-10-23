// Parameters for the function
export interface DeviceOptions {
    url: string;
    apiKey: string;
}

// Exported data fields
export interface Device {
    active: boolean;
    iden: string;
    created: number;
    modified: number;
    pushable: boolean;
    icon: string;
}

export interface FullResponse {
    accounts: unknown[];       
    blocks: unknown[];         
    channels: unknown[];       
    chats: unknown[];          
    clients: unknown[];        
    contacts: unknown[];       
    devices: Device[];
    grants: unknown[];         
    pushes: unknown[];         
    profiles: unknown[];       
    subscriptions: unknown[];  
    texts: unknown[];
}

// API call to the devices endpoint
export async function fetchDevices(options: DeviceOptions): Promise<FullResponse> {
    const { url, apiKey } = options;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status}: ${errorText}`);
        }

        const data = (await response.json()) as FullResponse;
        return data;
    } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
            throw new Error("Request timed out or was aborted");
        }

        throw error;
    }
}