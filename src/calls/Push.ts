export type PushType = 'note' | 'link' | 'file';

export interface PushData {
    type: PushType;
    [key: string]: any;
}

export interface PushOptions {
    url: string;
    apiKey: string;
    data: PushData;
}

export async function pushGeneric(options: PushOptions) {
    const { apiKey, url, data } = options;
}