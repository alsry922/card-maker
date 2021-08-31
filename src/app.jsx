import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Login authService={authService}></Login>
    </div>
  );
}

export default App;
