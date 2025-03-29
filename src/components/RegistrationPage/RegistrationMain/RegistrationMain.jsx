import { Link } from "react-router-dom"
import styles from "./RegistrationMain.module.scss";
import Svg from "../../layout/Svg/Svg";

import {    
  categoriesPagePath
} from "../../../router/path";

import {
  profileImage
} from "../../../assets/images"

import {
  cameraIcon
} from "../../../assets/svg"

function RegistrationMain() {
  return (
    <section className={styles.registrationMain}>   
      <div className={styles.registrationMain__header}>
        <div className={styles.registrationMain__imgContainer}>
          <img 
            src={profileImage}
            className={styles.registrationMain__img}
          />

          <div className={styles.registrationMain__cameraIconBg}>
            <Svg 
              id={cameraIcon} 
              className={styles.registrationMain__cameraIcon}
            />
          </div>
        </div>


        <div className="center">
          <h1 className="titleh1">
            <span className="textBlueGreen">Расскажи<br />
            </span>
            немного о себе!     
          </h1>

          <p>
            Это поможет находить мероприятия и людей, которые тебе подойдут.
          </p>
        </div>


        
      </div>
      <br /><br />

        Имя*
        <br />
        <br />
        Выберите пол* 
        <br />
        <br />
        Возраст
        <br />
        <br />



      Я согласен(а) на обработку персональных данных
      <br />
      <br />
      <Link 
        to={categoriesPagePath} 
        className="btnPrimary">Далее
      </Link>
    </section>
  )
}

export default RegistrationMain