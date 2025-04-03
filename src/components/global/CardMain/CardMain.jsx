import { Link } from "react-router-dom";
import styles from "./CardMain.module.scss";

import Card from "../Card/Card";
import Svg from "../../layout/Svg/Svg";

import { arrowNextIcon } from "../../../assets/svg";

import { categoriesImages } from "../../../constants/categoriesImages";
import { profileImage } from "../../../assets/images";
import { SwiperSlide, Swiper } from "swiper/react";
import { categoriesPagePath } from "../../../router/path";


const CardMain = ({ title, items, image, webpImage,id }) => {
  return (
    <section className={styles.cardMain}>
      <div className={styles.cardMain__cardCategory}>
        <h3 className="titleh3">{title}</h3>
        <Link to={`${categoriesPagePath}/${id}`} className={styles.cardMain__viewAll}>
          Смотреть все
          <Svg id={arrowNextIcon} className={styles.cardMain__arrowNext} />
        </Link>
      </div>

      <div className={styles.cardMain__cardContainer}>
        {/* <Card /> */}
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          // slidesOffsetBefore={7}
          // slidesOffsetAfter={7}
        >
          {items.map((card, index) => (
            <SwiperSlide key={index}>
              <Card
                {...card}
                image={image}
                webpImage={webpImage}
                category={title}
                id={id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CardMain;
