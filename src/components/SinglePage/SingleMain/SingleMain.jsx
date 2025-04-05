import styles from "./SingleMain.module.scss";
import SearchFilter from "../../layout/SearchFilter/SearchFilter";
import Card from "../../global/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import { categoriesImages } from "../../../constants/categoriesImages";
import { useEffect } from "react";
import { categoriesPagePath } from "../../../router/path";
import { profileImage } from "../../../assets/images";

const data = [
  {
    profilePhoto: profileImage,
    username: "User 1",
    title: "Lorem ipsum dolor sit amet consectetur adip",
    date: "21.02.25",
    time: "12:30",
    location: "Санкт-Питербург",
      keywords: [
      "18+",
      "Для девушек",
      "Для детей",
      "С животными",
    ]
  },
  {
    profilePhoto: profileImage,
    username: "User 2",
    title: "Lorem ipsum dolor sit amet consectetur adip",
    date: "21.02.25",
    time: "12:30",
    location: "Санкт-Питербург",
      keywords: [
      "18+",
      "Для девушек",
      "Для детей",
      "С животными",
    ]
  },
  {
    profilePhoto: profileImage,
    username: "User 3",
    title: "Lorem ipsum dolor sit amet consectetur adip",
    date: "21.02.25",
    time: "12:30",
    location: "Санкт-Питербург",
 
    keywords: [
      "18+",
      // "Для девушек",
      // "Для детей",
      // "С животными",
    ]
  },
  {
    profilePhoto: profileImage,
    username: "User 4",
    title: "Lorem ipsum dolor sit amet consectetur adip",
    date: "21.02.25",
    time: "12:30",
    location: "Санкт-Питербург",
      keywords: [
      "18+",
      "Для девушек",
      "Для детей",
      "С животными",
    ]
  },
];

const SingleMain = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const curCategory = categoriesImages.find((item) => item.id === id);

  useEffect(() => {
    if (!curCategory) {
      navigate(categoriesPagePath);
    }
  }, [params]);

  if (!curCategory) return null;

  return (
    <section className={styles.singleMain}>
      <SearchFilter />
      <h3 className={styles.singleMain__title}>
        {curCategory.title}
      </h3>
      <div className={styles.singleMain__columns}>
        {data.map((item) => (
          <div  className={styles.singleMain__singleOrder}>
          <Card
            {...item}
            className={styles.singleMain__card}
            image={curCategory.image}
            webpImage={curCategory.webpImage}
            category={curCategory.title}
            id={curCategory.id}
            isSingleOrder={true}
          />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleMain;