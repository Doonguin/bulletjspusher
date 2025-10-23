// Importing some important stuff, to make things work just how we like it here
import { fetchMe } from "./calls/Me.js";

// Basically external parameters, it ain't that deep bro
export interface Options {
    apiKey: string;
    baseURL?: string;
}

// API Wrapper type shii, LET'S FCKN GOOOOO
export class BulletJsPusher {
    private readonly apiKey: string;
    private readonly baseURL?: string;

    constructor({ apiKey, baseURL = "https://api.pushbullet.com/v2" }: Options) {
        this.apiKey = apiKey;
        this.baseURL = baseURL;
    }

    async getMe(): Promise<any> {
        return fetchMe({ url: `${this.baseURL}/users/me`, apiKey: this.apiKey });
    }
}