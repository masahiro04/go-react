import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

class Firebase {
  public user = {};

  public authenticated: boolean;

  public auth;

  constructor() {
    firebase.initializeApp(config);
    this.user = {};
    this.auth = firebase.auth();
    this.authenticated = false;
  }

  async login(email: string, password: string) {
    this.authenticated = true;
    return firebase.auth()
      .signInWithEmailAndPassword(email, password).catch((err) => console.log(err));
  }

  // eslint-disable-next-line class-methods-use-this
  async signup(email: string, password: string) {
    return firebase.auth()
      .createUserWithEmailAndPassword(email, password).catch((err) => console.log(err));
  }

  // eslint-disable-next-line class-methods-use-this
  async logout() {
    localStorage.clear();
    return firebase.auth().signOut().catch((err) => console.log(err));
  }

  async getUserState() {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          return resolve(user);
        }
        return reject(user);
      });
    });
  }

  checkLogin() {
    this.auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.user = user;
        this.authenticated = true;
      } else {
        this.user = {};
        this.authenticated = false;
      }
    });
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Firebase();
