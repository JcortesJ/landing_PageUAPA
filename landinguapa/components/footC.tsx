import React from "react";
import styles from "../styles/Home.module.css"

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.flex7}>
                    <div className={styles.cajitaBonita3}>
                        <ul>
                            <h3>Pages</h3>
                            <li>Home</li>
                            <li>Product</li>
                            <li>Pricing</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className={styles.cajitaBonita3}>
                        <ul>
                            <h3>Tomothy </h3>
                            <li>Eleanor Edwards</li>
                            <li>Ted Robertson</li>
                            <li>Annette Russell</li>
                            <li>Jennie Mckinney</li>
                            <li>Gloria Richards</li>
                        </ul>
                    </div>
                    <div className={styles.cajitaBonita3}>
                        <ul>
                            <h3>Jane Black</h3>
                            <li>Philip Jones</li>
                            <li>Product</li>
                            <li>Colleen Russell</li>
                            <li>Marvin Hawkins</li>
                            <li>Bruce Simmmons</li>
                        </ul>
                    </div>
                    <div className={styles.cajitaBonita3}>
                        
                                <span><img src={"/ub_blanco.png"} width={40} height={40}></img>7480 Mockingbird Hill undefined </span>
                                <br></br>
                                <span><img src={"/cel_blanco.jpg"} width={25} height={30}></img> 239 555-0108</span>
                                <br></br>
                            <img src={"/redes_soc.png"} width={170} height={55}></img> 
                         
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;