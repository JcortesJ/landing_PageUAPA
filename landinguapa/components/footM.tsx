import React from "react";
import styles from "../styles/Home.module.css"

const Footer = () => {
    return (
        <>
            <footer className={styles.footerM}>
                <div className={styles.flex7}>
                    <div className={styles.cajitaBonita3}>
                        <ul>
                            <h3>Annette Steward</h3>
                            <li>Jennie Cooper</li>
                            <li>Julie Henry</li>
                            <li>Johnny Murphy</li>
                            <li>Gregory Mccoy</li>
                            <li>Marvin Mckinney</li>
                        </ul>
                    </div>
                    <div className={styles.cajitaBonita3}>
                        <ul>
                            <h3>Annette Steward</h3>
                            <li>Jennie Cooper</li>
                            <li>Julie Henry</li>
                            <li>Johnny Murphy</li>
                            <li>Gregory Mccoy</li>
                            <li>Marvin Mckinney</li>
                        </ul>
                    </div>
                    <div className={styles.cajitaBonita3}>
                        <ul>
                            <h3>Annette Steward</h3>
                            <li>Jennie Cooper</li>
                            <li>Julie Henry</li>
                            <li>Johnny Murphy</li>
                            <li>Gregory Mccoy</li>
                            <li>Marvin Mckinney</li>
                        </ul>
                    </div>
                    
                    
                    <div className={styles.cajitaBonita3}>
                        
                                <span><img src={"/ub_blanco.png"} width={40} height={40}></img>7480 Mockingbird Hill undefined </span>
                                <br></br>
                                <span><img src={"/cel_blanco.jpg"} width={25} height={30}></img> 239 555-0108</span>
                                <br></br>
                            <img src={"/redes_soc.png"} width={170} height={55} className={styles.redes}></img> 
                         
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;