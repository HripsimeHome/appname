
import styles from "./CategoriesMain.module.scss";
import { categoriesImages } from "../../../constants/categoriesImages";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

const CategoriesMain = () => {

  const isSpecialCategory = (category) => category === "beauty" || category === "creation";
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
        {categoriesImages.map(
        ({ title, alt, image, webpImage }, index) => (
          <div className={styles.categoriesMain__category} key={index}>
            <h3 className={styles.categoriesMain__categoryTitle}>
            {title}
            </h3>

            <div className={styles.categoriesMain__categoryImgContainer}>
            <ImageWebp
              src={image}
              srcSet={webpImage}
              alt={alt}       
              pictureClass={styles.categoriesMain__categoryImgPosition}      
              className={styles.categoriesMain__categoryImg}
            //  className={`${styles.categoriesMain__categoryImg} ${isSpecialCategory(category) ? "categoryHalfImg" : ""}`}
            />
 </div>
        </div>
         )
        )}
      </div>
    </section>
  );
};

export default CategoriesMain;