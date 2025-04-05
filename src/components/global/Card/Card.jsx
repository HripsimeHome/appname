import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { categoriesPagePath } from "../../../router/path";

const bgStyles = {
  videogame: "linear-gradient(291.38deg, #CAD2FF 2.07%, #8D98FF 97.65%)",
  meetup: "linear-gradient(291.38deg, #FFCADA 2.07%, #FF8D9A 97.65%)",
  culture: "linear-gradient(291.38deg, #7CE0F3 2.07%, #C7A8FF 50.06%, #FF7D94 97.65%)",

  travel: "linear-gradient(291.38deg, #CAD2FF 2.07%, #4CBFC9 97.65%)",
  walks: "linear-gradient(291.38deg, #E2FFCA 2.07%, #69C249 97.65%)",
  creation: "linear-gradient(291.38deg, #EBCAFF 2.07%, #EC8DFF 97.65%)",   
  hobby: "linear-gradient(291.38deg, #2C81AA 2.07%, #5A9ACF 50.06%, #8D98FF 97.65%)",

  beauty: "linear-gradient(291.38deg, #DDC9A0 2.07%, #9F8050 97.65%)", 

  sport: "linear-gradient(291.38deg, #ABD780 2.07%, #8DAF59 50.06%, #6F9D40 97.65%)",

  business: "linear-gradient(291.38deg, #C29C79 2.07%, #A77D55 50.06%, #9E6A49 97.65%)",

  science: "linear-gradient(291.38deg, #D3E8F5 2.07%, #B3D9F5 50.06%, #A0D0F5 97.65%)",

  books: "linear-gradient(291.38deg, #A8E06A 2.07%, #8DC63F 50.06%, #6F9B3F 97.65%)", 
}

const Card = ({
  className,
  category,
  profilePhoto,
  username,
  image,
  webpImage,
  title,
  date,
  time,
  location,
  id,
  keywords
}) => {
  
  return (
    <>
      <Link 
        to={`${categoriesPagePath}/${id}`} 
        className={className || ""}>
        <div className={styles.card}>
          <div 
            style={{background: bgStyles[id]}} 
            className={styles.card__header}>
            <div className={styles.card__profileContainer}>
              <img
                src={profilePhoto}
                alt="Profile photo"
                className={styles.card__profilePhoto}
              />
              <div className={styles.card__username}>
                {username}
              </div>
            </div>

            <ImageWebp
              src={image}
              srcSet={webpImage}
              //alt={alt}
              pictureClass={styles.card__categoryImgPosition}
              className={styles.card__categoryImg}              
            />
          </div>

          <h4 className={styles.card__title}>{title}</h4>

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

            {location && <div className={styles.card__greyPanel}>
              <div className={styles.card__iconPosition}>
                <label className={styles.card__locationIcon}></label>
                <span>{location}</span>
              </div>
            </div>}
          </div>

          <hr className={styles.card__greyLine} />
          <div className={styles.card__infoContaineSmall}>
            {
              keywords.map((keyword,index) => (

                <span 
                  className={styles.card__greyPanel} 
                  key={index}>{keyword}</span>
              ))
            }
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;