import { Link } from "react-router-dom"
import styles from "./AudienceMain.module.scss";

import {    
  registrationPagePath
} from "../../../router/path";

const AudienceMain = () => {
  return (
    <section className={styles.audienceMain}>
      <h1>Кому это <br />подойдёт?</h1>
         
      <ul className={styles.audienceMain__list}>
        <li>Если ты недавно переехал и хочешь завести новых друзей</li>
        <li>Если тебе интересно живое общение без соцсетей</li>
        <li>Если ты любишь весело проводить время в компании. Тогда тебе точно сюда!          
        </li>
        </ul>
      <Link 
        to={registrationPagePath} 
        className="btnPrimary">
        Далее
      </Link>
    </section>
  );
};

export default AudienceMain;
