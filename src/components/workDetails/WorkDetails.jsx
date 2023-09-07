import WorkDetail from "./workdetail/WorkDetails";
import styles from "./WorkDetails.module.scss";

const WorkDetails = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.work_detail}>
        <WorkDetail category="CLIENT" description="INVISION CIRCLE" />
      </div>
      <div className={styles.work_detail}>
        <WorkDetail category="TIMELINE" description="8 WEEKS" />
      </div>
      <div className={styles.work_detail}>
        <WorkDetail category="SERVICE" description="LOGO DESIGN" />
      </div>
      <div className={styles.work_detail}>
        <WorkDetail category="WEBSITE" description="GOLA.IO" />
      </div>
    </div>
  );
};

export default WorkDetails;
