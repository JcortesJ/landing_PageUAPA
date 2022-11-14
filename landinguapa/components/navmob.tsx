import Link from 'next/link';
import { useRef } from 'react';
import styles from '../styles/Home.module.css';

const MobileNav = () =>{
    //const menu = useRef<HTMLDivElement>(null);
    const menu =useRef<HTMLUListElement>(null);
    
    let abierto:boolean = false;
    const mostrarMenu= () => {
   
        if(menu.current !== null && !abierto){
            menu.current.style.display = "block";
            abierto=true;
        }
        else if(menu.current !== null && abierto){
            menu.current.style.display="none";
            abierto = false;
        }
    }
   
    return(
        <div className={styles.navMobile} >
            <img src="/logo.png" height={38} width={186} className={styles.figma} ></img>
            <button onClick={mostrarMenu} className={styles.iconMenu}></button>
            <ul className={styles.listaMobile} ref={menu}>
            <li> <Link href={"/#Home"}><p className={styles.textoLink}>Home</p></Link> </li> 
            <li>  <Link href={"/#Product"}><p className={styles.textoLink}>Product</p></Link></li>
            <li>  <Link href={"/#Pricing"}><p className={styles.textoLink}>Pricing</p></Link></li>
            <li>  <Link href={"/#About"}><p className={styles.textoLink}>About</p></Link></li>
            <li> <Link href={"/#Contact"}><p className={styles.textoLink}>Contact</p></Link></li>
 

            </ul>
        </div>

    );
}

export default MobileNav;