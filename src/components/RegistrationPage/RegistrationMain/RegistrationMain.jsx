import { useRef } from "react";
import styles from "./RegistrationMain.module.scss";
import Svg from "../../layout/Svg/Svg";

import {
  profileImage
} from "../../../assets/images"

import {
  cameraIcon
} from "../../../assets/svg"

function RegistrationMain() {
  const inputNameRef = useRef();

  const isFilled = () => inputNameRef.current?.value.trim();


  return (
    <section className={styles.registrationMain}>   
      <div className={styles.registrationMain__header}>
        <div className={styles.registrationMain__profileImgContainer}>
          <img 
            src={profileImage}
            className={styles.registrationMain__profileImg}
          />
          <div className={styles.registrationMain__cameraIconBg}>
            <input
              type="file"              
              id="profileImageUpload"
              accept="image/*"
              hidden
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
          <br />

          <p>
            Это поможет находить мероприятия и людей, которые тебе подойдут.
          </p>
        </div>        
      </div>

      <div className={styles.registrationMain__registrationContainer}>    
        <div className={styles.registrationMain__inputWrapper}>
          <input
            type="text"
            id="name"
            ref={inputNameRef}
            className={styles.registrationMain__inputField}
            onInput={(e) =>
              e.currentTarget.nextSibling.classList.toggle(
                styles.hide,
                isFilled()
              )
            }
            required
          />
          <label 
            htmlFor="name" 
            className={styles.registrationMain__placeholder}>
            Имя <span>*</span>
          </label>
        </div>    

        <div className={styles.registrationMain__selectWrapper}>
          <select required>
            <option value="" hidden>Выберите пол *</option>
            <option value="female">Женский</option>
            <option value="male">Мужской</option>
          </select>
        </div>

        <input 
          type="text" 
          placeholder="Возраст" 
          className={styles.registrationMain__inputField}
        />   

        <label className={styles.registrationMain__consentText}>
          <input
            type="checkbox"
            className={styles.registrationMain__consentCheckbox}
            required       
          />
         Я согласен(а) на обработку персональных данных
       </label>

      </div>
    </section>
  )
}

export default RegistrationMain