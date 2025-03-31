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




      <div className={styles.registrationMain__registrationContainer}>
  <input type="text" placeholder="Имя" />

  <input type="text" placeholder="Возраст" />

 <select required>
    <option value="" hidden>Выберите пол</option>
    <option value="female">Женский</option>
    <option value="male">Мужской</option>
  </select>

  <label>
    <input type="checkbox" required />
    &nbsp;Я согласен(а) на обработку персональных данных
  </label>
</div>








      <Link 
        to={categoriesPagePath} 
        className="btnPrimary">Далее
      </Link>
    </section>
  )
}

export default RegistrationMain