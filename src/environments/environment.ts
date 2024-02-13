interface Environment {
    production: boolean,
    firebaseConfig: {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string,
    }
}

export const environment: Environment = {
    production: false,
    firebaseConfig: {
    apiKey: "AIzaSyAJGgAbVBQKbxU5cQhy5w-m8_ukztwQXKU",
    authDomain: "phil-hist.firebaseapp.com",
    projectId: "phil-hist",
    storageBucket: "phil-hist.appspot.com",
    messagingSenderId: "978200448747",
    appId: "1:978200448747:web:9b7f7830aa12d58f68f8ae",
    measurementId: "G-PYJ0CCXEPR",
    }
};
