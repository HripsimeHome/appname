import { Link } from "react-router-dom"
import styles from "./CardMain.module.scss"

import Card from "../Card/Card"
import Svg from "../../layout/Svg/Svg";
 
import {
  arrowNextIcon, 
} from "../../../assets/svg";
 
import {    
 singlePagePath
} from "../../../router/path";

const CardMain = () => {
  return (
    <section className={styles.cardMain}>
      <div className={styles.cardMain__cardCategory}>
        <h3 className="titleh3">Видеоигры</h3> 
        <Link 
          to={singlePagePath} 
          className={styles.cardMain__viewAll}
          >
          Смотреть все           
          <Svg 
            id={arrowNextIcon} 
            className={styles.cardMain__arrowNext}
          />   
        </Link>
      </div>    

      <div className={styles.cardMain__cardContainer}>
        <Card />
      </div>  
    </section>
  );
};

export default CardMain;