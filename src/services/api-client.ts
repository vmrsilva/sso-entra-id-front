import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../auth/auth-config";
import axios from "axios";

const msalInstance = new PublicClientApplication(msalConfig);

const API_URL = "https://localhost:44391";

const apiClient = axios.create({
    baseURL: API_URL,
});

msalInstance.initialize().then(() => {
    apiClient.interceptors.request.use(async (config) => {
        const account = msalInstance.getActiveAccount();
        if (account) {
            const tokenResponse = await msalInstance.acquireTokenSilent({
                account: account,
                scopes: ["api://0387a735-7093-464b-9382-19e422936258/users"],
            });
            config.headers.Authorization = `Bearer ${tokenResponse.accessToken}`;
        }
        return config;
    });
});

export default apiClient;