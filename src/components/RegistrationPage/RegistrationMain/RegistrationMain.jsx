import { useState } from "react";
import Select from "../../layout/Select/Select";
import styles from "./RegistrationMain.module.scss";
import Svg from "../../layout/Svg/Svg";
import { profileImage } from "../../../assets/images";
import { cameraIcon } from "../../../assets/svg";

function RegistrationMain() {
  const [selectValue, setSelectValue] = useState("");

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
            <span className="textBlueGreen">
              Расскажи
              <br />
            </span>
            немного о себе!
          </h1>

          <p className={styles.registrationMain__registrationText}>
            Это поможет находить мероприятия и людей, которые тебе подойдут.
          </p>
        </div>
      </div>

      <div className={styles.registrationMain__registrationContainer}>
        <div className={styles.registrationMain__inputWrapper}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            className={styles.registrationMain__inputField}
            required
            autoComplete="name"
          />
          <label
            htmlFor="name"
            className={styles.registrationMain__inputPlaceholder}
          >
            Имя <span className="textRed">*</span>
          </label>
        </div>

        <Select
          valuesArr={[
            { item: "Женский", value: "Женский" },
            { item: "Мужской", value: "Мужской" },
          ]}
          onChange={(value) => setSelectValue(value)}
          name={
            <>
              Выберите пол&nbsp;<span className="textRed">*</span>
            </>
          }
        />      

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
  );
}

export default RegistrationMain;