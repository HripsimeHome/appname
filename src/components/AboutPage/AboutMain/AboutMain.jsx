import { Link } from "react-router-dom"
import styles from "./AboutMain.module.scss";

import {    
  audiencePagePath
} from "../../../router/path";

const AboutMain = () => {
  return (
    <section className={styles.aboutMain}>
      <h1>Что это за  <br />платформа?</h1>
        <p>
          <span className="textGreenLightGreen">
            <strong>AppName</strong>  
          </span> — это место, где каждый может создать или найти локальное мероприятие.          
        </p>

      <ul className={styles.aboutMain__list}>
        <li>Игры, прогулки, вечеринки, шопинг – выбирай своё!</li>
        <li>Фильтруй события по интересам</li>
        <li>Нажимай «Я пойду» и присоединяйся</li>
        </ul>
      <Link 
              to={audiencePagePath} 
              className="btnPrimary">Далее
            </Link>
    </section>
  );
};

export default AboutMain;
