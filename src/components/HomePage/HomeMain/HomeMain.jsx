import styles from "./HomeMain.module.scss";

const HomeMain = () => {
  return (    
    <section className={styles.homeMain}>
      <h1>Добро пожаловать в AppName!</h1> 

      <h4>Ищи события по интересам</h4>
      <h4>Встречай единомышленников</h4>
      <h4>Открывай новое в своей стране</h4>
    </section>   
  );
};

export default HomeMain;