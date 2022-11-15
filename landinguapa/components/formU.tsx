import React from "react";
import styles from "../styles/Home.module.css"

const Form = () =>{
    return(
        <>
        <div className={styles.flex5}>
            <h3><strong>Contact us</strong></h3>
            <input placeholder="Your name" className={styles.inputNormal}></input>
            <input placeholder="Your email" className={styles.inputNormal}></input>
            <textarea placeholder="Your message" className={styles.inputGrande}  ></textarea>
            <button className={styles.botonFancy2}>
            Send
          </button>
        </div>
        </>
    );
}

export default Form;