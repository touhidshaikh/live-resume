// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace the data below with your personal data
  personal: {
    caricature: "tms-Illustration.png",
    name: "Touhid M Shaikh",
    birth: "1993-02-22",
    email: "tms@touhidshaikh.com",
    phone: "+91 7738794435",
    location: "Pune, Maharashtra, India"
  },
  // replace the dummy data below with the real firebase configs
  firebaseConfig: {
    apiKey: "AIzaSyDfSyfjyivYzTHcLjmbtGSIPfUR1UsBrno",
    authDomain: "tms-live-resume.firebaseapp.com",
    databaseURL: "https://tms-live-resume.firebaseapp.com",
    projectId: "tms-live-resume",
    storageBucket: "tms-live-resume.appspot.com",
    messagingSenderId: "4041059993",
    appId: "1:4041059993:web:b8a92089843e134e669208",
    measurementId: "G-VRVLYZWJ8L"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
