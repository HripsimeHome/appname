import { Link } from "react-router-dom"
import styles from "./Card.module.scss"
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "./../../layout/Svg/Svg";
 
import {    
 singlePagePath
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

import {
  clockIcon, 
  locationIcon
} from "../../../assets/svg";

const Card = () => {
  return (
    <>  
     <div className={styles.card}>
      



     <div className={styles.card__header}>

     <div className={styles.card__profileContainer}>
      
      <ImageWebp
        src={meetupImage}
        srcSet={meetupWebpImage}
        //alt={alt}
       // key={index}
       // className={styles.categoriesMain__profilePhoto}
       className={styles.card__profilePhoto}
      />
     
      <div className={styles.card__username}>Имя</div>
     </div>

      <ImageWebp
        src={videogameImage}
        srcSet={videogameWebpImage}
        //alt={alt}
       // key={index}
       // className={styles.categoriesMain__categoryImg}
      />

     </div>









      <h4 className={styles.card__title}>
        Lorem ipsum dolor sit amet consectetur adip        
      </h4>


      <div className={styles.card__infoContainerBig}>
      <div className={styles.card__greyPanel}>
        <span>
        
          21.02.25,</span>
        <span>12:30</span>
      </div>

      <span className={styles.card__greyPanel}>
       <strong>Видеоигры</strong>
      </span>
      <span className={styles.card__greyPanel}>
      
        Санкт-Питербург
      </span>
</div>



     

      <hr className={styles.card__greyLine} />

      <span className={styles.card__greyPanel}>
      18+
      </span>

      <span className={styles.card__greyPanel}>
      Для девушек
      </span>

      <span className={styles.card__greyPanel}>
      Для детей
      </span>

      <span className={styles.card__greyPanel}>
      С животными
      </span>



     </div>



   
     </>      
  );
};

export default Card;