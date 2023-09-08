import styles from "./MyClients.module.scss";
import logo_company from "../../assets/icons/logo_company.svg";
import logoipsum from "../../assets/icons/logoipsum.svg";
import logoa from "../../assets/icons/logo_a.svg";
import logob from "../../assets/icons/logo_b.svg";
import logoc from "../../assets/icons/logo_c.svg";

const MyClients = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.myclients}>
        <div className={styles.line}></div>
        <span className={`meta_text ${styles.title}`}>My Client</span>
      </div>
      <div className={styles.icons_div}>
        <div className={styles.icons}>
          <img src={logo_company} alt="" />
        </div>
        <div className={styles.icons}>
          <img src={logoipsum} alt="" />
        </div>
        <div className={styles.icons}>
          <img src={logoa} alt="" />
        </div>
        <div className={styles.icons}>
          <img src={logob} alt="" />
        </div>
        <div className={styles.icons}>
          <img src={logoc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyClients;
