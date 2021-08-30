import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    const auth = firebase.auth.getAuth();
    return firebase.auth.signInWithPopup(auth, authProvider);
  }
}

export default AuthService;
