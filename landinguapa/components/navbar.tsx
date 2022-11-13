import React from "react";
import styles from '../styles/Home.module.css';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    return (
        <>
        <nav className={styles.navb}>
                <button className={styles.navButtons}><Link href={"/#Home"}>Home</Link></button> 
               <button className={styles.navButtons} ><Link href={"/#Product"}>Product</Link></button>
               <button className={styles.navButtons} ><Link href={"/#Pricing"}>Pricing</Link></button>
               <button className={styles.navButtons} ><Link href={"/#About"}>About</Link></button>
               <button className={styles.navButtons} ><Link href={"/#Contact"}>Contact</Link></button>
               <img src="/logo.png" height={38} width={186} className={styles.figma} ></img>
               <img src="/fb_logo.png" height={30} width={30} ></img>
               <img src="/tw_logo.png" height={30} width={30} ></img>
               <img src="/logo_in.png" height={30} width={30} ></img>
            
               

        </nav>
        </>
    );
}

export default Navbar;