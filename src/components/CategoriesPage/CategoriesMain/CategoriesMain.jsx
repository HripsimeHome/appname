import { Link } from "react-router-dom"
import styles from "./CategoriesMain.module.scss";

import {    
  searchPagePath
} from "../../../router/path";


const CategoriesMain = () => {
  return (
    <section className={styles.categoriesMain}>
      <h2 className="titleh2">Чем ты&nbsp;
        <span className="textBlueGreen">увлекаешься?       
        </span>
      </h2>
      <p className={styles.categoriesMain__text}>
        Выбери минимум 3 интереса — так ты увидишь больше подходящих
        мероприятий.
      </p>
      <div className={styles.categoriesMain__cardContainer}>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Видеоигры
          </h3>
          fg
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Видеоигры
          </h3>
          fg
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Видеоигры
          </h3>
          fg
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Видеоигры
          </h3>
          fg
        </div>

      </div>
      <Link 
        to={searchPagePath} 
        className="btnPrimary">
        Далее
      </Link>

    </section>
  );
};

export default CategoriesMain;
