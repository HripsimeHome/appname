import styles from "./Footer.module.scss"
//import Svg from "../../layout/Svg/Svg";
//import { NavLink } from "react-router-dom";

import {    
  //homePagePath
} from "../../../router/path";

import {
  //moneyIcon,
 
} from "../../../assets/svg";
 
const Footer = () => {
  return (
    <footer className={styles.footer}>         
      <div className={`${styles.footer__container} container`}>
      <div className={styles.footer__line}></div>
      </div>
    </footer>
  );
};

export default Footer;