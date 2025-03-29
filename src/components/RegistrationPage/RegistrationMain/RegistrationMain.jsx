import { Link } from "react-router-dom"
import styles from "./RegistrationMain.module.scss";

import {    
  categoriesPagePath
} from "../../../router/path";

function RegistrationMain() {
  return (
    <section className={styles.registrationMain}>
       

      <h1 className="titleh1">
        <span className="textBlueGreen">Расскажи<br />
        </span>
        немного о себе!     
      </h1>
      <p>
        Это поможет находить мероприятия и людей, которые тебе подойдут.
      </p>

      Я согласен(а) на обработку персональных данных
      <Link 
        to={categoriesPagePath} 
        className="btnPrimary">Далее
      </Link>
    </section>
  )
}

export default RegistrationMain