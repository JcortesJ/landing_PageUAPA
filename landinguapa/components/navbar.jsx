import React from "react";
import styles from '../styles/Home.module.css';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    return (
        <>
        <nav className={styles.navb}>
                <button className={styles.navButtons}><Link href={"/#top"}>Home</Link></button> 
               <button className={styles.navButtons} ><Link href={"/#Equipo"}>Product</Link></button>
               <button className={styles.navButtons} ><Link href={"/#Quienes"}>Pricing</Link></button>
               <button className={styles.navButtons} ><Link href={"/#Apoyo"}>About</Link></button>
               <button className={styles.navButtons} ><Link href={"/#Contacto"}>Contact</Link></button>
               <img src="/logo.png" height={38} width={186} className={styles.figma} ></img>
               <img src="/fb_logo.png" height={30} width={30} ></img>
               <img src="/tw_logo.png" height={30} width={30} ></img>
               <img src="/logo_in.png" height={30} width={30} ></img>
            
               

        </nav>
        </>
    );
}

export default Navbar;