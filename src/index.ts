// Importing some important stuff, to make things work just how we like it here
import { fetchDevices, type Device, type FullResponse } from "./calls/DeviceIden.js";
import { fetchMe, type UserData } from "./calls/Me.js";

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

    // Get own data from pushbullet
    async getMe() {
        return fetchMe({ url: `${this.baseURL}/users/me`, apiKey: this.apiKey });
    }

    static async getMe(options: { apiKey: string }): Promise<UserData> {
        const client = new BulletJsPusher(options);
        return client.getMe();
    }

    // Get device identification
    async getDevices() {
        return fetchDevices({ url: `${this.baseURL}/devices`, apiKey: this.apiKey });
    }

    static async getDevices(options: { apiKey: string }): Promise<FullResponse> {
        const client = new BulletJsPusher(options);
        return client.getDevices();
    }
}