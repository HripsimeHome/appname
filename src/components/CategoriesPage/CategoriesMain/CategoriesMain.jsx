import { Link } from "react-router-dom"
import styles from "./CategoriesMain.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {    
  searchPagePath
} from "../../../router/path";

import {
  videogameImage,
  videogameWebpImage,

  meetupImage,
  meetupWebpImage,

  cultureImage,
  cultureWebpImage,

  travelImage,
  travelWebpImage,

  walksImage,
  walksWebpImage,

  creationImage,
  creationWebpImage,

  hobbyImage,
  hobbyWebpImage,

  beautyImage,
  beautyWebpImage,

  sportImage,
  sportWebpImage,

  businessImage,
  businessWebpImage,

  scienceImage,
  scienceWebpImage,

  booksImage,
  booksWebpImage

} from "../../../assets/images"

const category = [
  {
    title: "Видеоигры",
    image: videogameImage,
    webpImage: videogameWebpImage,
    alt: "Видеоигры"  
  },

  {
    title: "Встречи",
    image: meetupImage,
    webpImage: meetupWebpImage,
    alt: "Встречи"  
  },

  {
    title: "Культура",
    image: cultureImage,
    webpImage: cultureWebpImage,
    alt: "Культура"  
  },

  {
    title: "Путешествия",
    image: travelImage,
    webpImage: travelWebpImage,
    alt: "Путешествия"  
  },

  {
    title: "Прогулки",
    image: walksImage,
    webpImage: walksWebpImage,
    alt: "Прогулки"  
  },

  {
    title: "Творчество",
    image: creationImage,
    webpImage: creationWebpImage,
    alt: "Творчество"  
  },

  {
    title: "Хобби",
    image: hobbyImage,
    webpImage: hobbyWebpImage,
    alt: "Хобби"  
  },

  {
    title: "Красота",
    image: beautyImage,
    webpImage: beautyWebpImage,
    alt: "Красота"  
  },

  {
    title: "Спорт",
    image: sportImage,
    webpImage: sportWebpImage,
    alt: "Спорт"  
  },

  {
    title: "Бизнес",
    image: businessImage,
    webpImage: businessWebpImage,
    alt: "Бизнес"  
  },

  {
    title: "Наука",
    image: scienceImage,
    webpImage: scienceWebpImage,
    alt: "Наука"  
  },  

  {
    title: "Книги",
    image: booksImage,
    webpImage: booksWebpImage,
    alt: "Книги"  
  },
]

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
        {category.map(
        ({ title, image, webpImage, alt }, index) => (
          <div className={styles.categoriesMain__category}>
            <h3 className={styles.categoriesMain__categoryTitle}>
            {title}
            </h3>
            <ImageWebp
              src={image}
              srcSet={webpImage}
              alt={alt}
              key={index}
              className={styles.categoriesMain__categoryImg}
            />
        </div>
         )
        )}
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
