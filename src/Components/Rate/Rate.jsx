import React from "react";
import styles from "./Rate.module.css"
import { useState } from "react"

function Rate(props) {
   const { color, cost, speed } = props;
   const [active, setActive] = useState(false);
   function handleActiveCard() {
      setActive(!active)
   }
   return (
      <>
         <div className={`${styles.card} ${active ? styles.scale : ""} `} onClick={handleActiveCard}>
            <div className={styles.card_top} style={{ backgroundColor: color }}>
               <h2 className={styles.card_rate} >Безлимитный {cost}</h2>
               <div className={styles.card_box}>
                  <span>руб</span>
                  <h1 className={styles.card_title}>{cost}</h1>
                  <span> /мес</span>
               </div>
            </div>
            <div className={styles.card_bottom}>
               <h3 className={styles.card_speed}>до {speed} Мбит/сек</h3>
               <p className={styles.card_text}>Объем включенного трафика не ограничен</p>
            </div>
         </div>
      </>
   )
}

export default Rate
