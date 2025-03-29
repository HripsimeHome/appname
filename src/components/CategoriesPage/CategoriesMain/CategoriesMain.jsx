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
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
          Встречи
          </h3>
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
          Культура
          </h3>
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Путешествия
          </h3>
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Прогулки
          </h3>
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Творчество
          </h3>
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Хобби
          </h3>
          img
        </div>


        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Красота
          </h3>
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Спорт
          </h3>
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Бизнес
          </h3>
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Наука
          </h3>
          img
        </div>

        <div className={styles.categoriesMain__card}>
          <h3 className={styles.categoriesMain__cardTitle}>
            Книги
          </h3>
          img
        </div>




      </div>
      <br />

      <Link 
        to={searchPagePath} 
        className="btnPrimary">
        Далее
      </Link>

    </section>
  );
};

export default CategoriesMain;
