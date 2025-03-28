import styles from "./CategoriesMain.module.scss";

const CategoriesMain = () => {
  return (
    <section className={styles.categoriesMain}>
      <h1 className="titleh1">Чем ты&nbsp;
        <span className="texBlueGreen">увлекаешься?       
        </span>
      </h1>
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
      <button className="btnPrimary">Далее</button>




    </section>
  );
};

export default CategoriesMain;
