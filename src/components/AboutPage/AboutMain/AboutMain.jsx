import styles from "./AboutMain.module.scss";

const AboutMain = () => {
  return (
    <section className={styles.aboutMain}>
      <div className="center"> 
        <h1 className="titleh1">Что это за  <br />платформа?
        </h1>        
        <p className={styles.aboutMain__aboutMainText}>
          <span className="textGreenLightGreen">
            <strong>AppName</strong>  
          </span> — это место, где каждый может создать или найти локальное мероприятие.          
        </p>
      </div> 
        
      <ul className="list circleBlueGreen">
        <li>Игры, прогулки, вечеринки, шопинг – выбирай своё!</li>
        <li>Фильтруй события по интересам</li>
        <li>Нажимай «Я пойду» и присоединяйся</li>
      </ul>
    </section>
  );
};

export default AboutMain;