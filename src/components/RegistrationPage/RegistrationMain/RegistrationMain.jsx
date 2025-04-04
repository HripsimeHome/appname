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
            <input
              type="file"
              hidden
              id="profileImageUpload"
              accept="image/*"
            />
            <label htmlFor="profileImageUpload">
              <Svg
                id={cameraIcon}
                className={styles.registrationMain__cameraIcon}
              />
            </label>
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








    </section>
  )
}

export default RegistrationMain