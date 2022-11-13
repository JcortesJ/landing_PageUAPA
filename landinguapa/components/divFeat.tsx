import React from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css'


const Infodiv= (props:string[]) => {
    let foto = props[0];
    let titulo = props[1];
    let texto = props[2];
    
    return(
        <>
    <div className={styles.cajitaBonita}>
            <img src={foto} width={45} height={45} />
            <h3><strong> {titulo}</strong></h3>
            <p>{texto}</p>
        
    </div>

        </>
    );
}

export default Infodiv;