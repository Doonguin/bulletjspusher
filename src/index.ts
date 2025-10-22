// Importing some important stuff, to make things work just how we like it here
import { fetchMe } from "./calls/Me.js";

// Basically external parameters, it ain't that deep bro
export interface Options {
    apiKey: string;
    baseUrl?: string;
}

// API Wrapper type shii, LET'S FCKN GOOOOO
export class BulletJsPusher {
    private apiKey: string;
    private baseUrl?: string;

    constructor(options: Options) {
        this.apiKey = options.apiKey;
        this.baseUrl = options.baseUrl || "https://api.pushbullet.com/v2";
    }

    async getMe() {
        return fetchMe({ url: `${this.baseUrl}/users/me`, apiKey: this.apiKey });
    }
}