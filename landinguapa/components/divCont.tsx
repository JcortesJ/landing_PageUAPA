import React from "react";
import styles from "../styles/Home.module.css"

const InfoCon = (props:string[]) =>{
    let foto = props[0];
    let titulo = props[1];
    return(<>
     <div className={styles.cajitaBonita2}>
            <img src={foto} width={23} height={25} />
            <h5> {titulo}</h5>
    </div>

        </>
   );
};

export default InfoCon;