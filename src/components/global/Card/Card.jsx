import { Link } from "react-router-dom"
import styles from "./Card.module.scss"
import { categoriesImages } from "../../../constants/categoriesImages";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
 
import {    
 singlePagePath
} from "../../../router/path";

import {
  profileImage, 

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

const cardData = [
  {
    category: "Видеоигры",
    profilePhoto: profileImage,
    username: "User 1",
    image: videogameImage,
    webpImage: videogameWebpImage,
    title: "Lorem ipsum dolor sit amet consectetur adip",
    date: "21.02.25",
    time: "12:30",
    location: "Санкт-Питербург",
    age: "18+",
    genderSpecific: "Для девушек",
    forKids: "Для детей",
    petFriendly: "С животными",
   // className: "",
  },
  {
    category: "Встречи",
    profilePhoto: profileImage,
    username: "User 2",
    image: meetupImage,
    webpImage: meetupWebpImage,
    title: "Sit amet consectetur adip",
    date: "05.03.25",
    time: "10:00",
    location: "Москва",
    age: "18+",
    genderSpecific: "Для всех",
    forKids: "Для детей",
    petFriendly: "С животными",
     // className: "",
  },
  
];


const Card = () => {
  return (   
    <>
    {cardData.map(
      ({ category, profilePhoto, username, image, webpImage, title, date, time, location, age, genderSpecific, forKids, petFriendly }, index) => (
      <Link to={singlePagePath} key={index}>
        <div className={styles.card}>      
          <div className={styles.card__header}>
            <div className={styles.card__profileContainer}>      
              <img
                src={profilePhoto}
                alt="Profile photo"            
                className={styles.card__profilePhoto}
              />     
            <div className={styles.card__username}>{username}</div>
          </div>

          <ImageWebp
             src={image}
             srcSet={webpImage}
              //alt={alt}       
              // className={styles.categoriesMain__categoryImg}
            />
          </div>

          <h4 className={styles.card__title}>
            {title}        
          </h4>

          <div className={styles.card__infoContainerBig}>
            <div className={styles.card__greyPanel}>
              <div className={styles.card__iconPosition}>        
                <label className={styles.card__clockIcon}></label>                
                <span>{date},</span>
                <span>{time}</span>
              </div>
            </div>

            <span className={styles.card__greyPanel}>
              <strong>{category}</strong>
            </span>

            <div className={styles.card__greyPanel}>      
              <div className={styles.card__iconPosition}>        
                <label className={styles.card__locationIcon}></label>
                <span>{location}</span>          
              </div>        
            </div>          
          </div>  

          <hr className={styles.card__greyLine} />
          <div className={styles.card__infoContaineSmall}>
            <span className={styles.card__greyPanel}>
            {age}
            </span>

            <span className={styles.card__greyPanel}>
            {genderSpecific}
            </span>

            <span className={styles.card__greyPanel}>
            {forKids}
            </span>

            <span className={styles.card__greyPanel}>
            {petFriendly}
            </span>
          </div>

        </div>   
      </Link>
      )
    )}
    </>    
  );
};

export default Card;