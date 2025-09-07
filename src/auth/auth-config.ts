import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: '0387a735-7093-464b-9382-19e422936258', 
        authority: 'https://login.microsoftonline.com/ed254186-cd15-4faa-8698-829b68693680/', 
        redirectUri: '/', 
        postLogoutRedirectUri: '/', 
        navigateToLoginRequestUrl: false, 
    },
    cache: {
        cacheLocation: 'sessionStorage', 
        storeAuthStateInCookie: false, 
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: any, message: any, containsPii: any) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};


export const loginRequest = {
    scopes: [],
};