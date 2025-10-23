// Parameters for the function
export interface MeOptions {
    url: string;
    apiKey: string;
}

// Exported data fields
export interface UserData {
    iden: string;
    name: string;
    email: string;
    email_normalized: string;
    image_url: string;
    active: boolean;
    created: EpochTimeStamp;
    modified: EpochTimeStamp;
    max_upload_size: number;
}

// API call to the me endpoint
export async function fetchMe(options: MeOptions): Promise<UserData> {
    const { url, apiKey } = options;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status}: ${errorText}`);
        }

        const data = (await response.json()) as UserData;
        return data;
    } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
            throw new Error("Request timed out or was aborted");
        }

        throw error;
    }
}