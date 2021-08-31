import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  login(providerName) {
    let authProvider;
    if (providerName === "Google") authProvider = new GoogleAuthProvider();
    if (providerName === "Github") authProvider = new GithubAuthProvider();
    // const authProvider = new firebase[`${providerName}AuthProvider`]();
    const auth = getAuth();
    return signInWithPopup(auth, authProvider);
  }
}

export default AuthService;
