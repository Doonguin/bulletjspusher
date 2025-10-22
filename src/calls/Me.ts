export interface MeOptions {
    url: string;
    apiKey: string;
}

export async function fetchMe(options: MeOptions) {
    const response = await fetch(options.url, { headers: { 'Access-Token': options.apiKey }});

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}