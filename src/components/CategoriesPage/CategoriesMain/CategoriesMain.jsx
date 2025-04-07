
import styles from "./CategoriesMain.module.scss";
import { categoriesImages } from "../../../constants/categoriesImages";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { checkSpecialCategory } from "../../../utils/checkSpecialCategory";

const CategoriesMain = () => {

  return (    
    <section className={styles.categoriesMain}>
      <h2 className="titleh2">Чем ты&nbsp;
      <span className={styles.categoriesMain__titleGradient}>увлекаешься?             
        </span>
      </h2>
      <p className={styles.categoriesMain__text}>
        Выбери минимум 3 интереса — так ты увидишь больше подходящих
        мероприятий.
      </p>
      <div className={styles.categoriesMain__cardContainer}> 
        {categoriesImages.map(
        ({ title, alt, image, webpImage,id }, index) => (
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
              className={`${styles.categoriesMain__categoryImg} ${checkSpecialCategory(id) ? styles.categoriesMain__categoryImg_half : ""}`}
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