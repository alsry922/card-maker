import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.container}>
      <Header></Header>
      {
        <section className={styles.loginSection}>
          <h1 className={styles.title}>Login</h1>
          <div>
            <button>Google</button>
            <button>Github</button>
          </div>
        </section>
      }
      <Footer></Footer>
    </div>
  );
};

export default Login;
