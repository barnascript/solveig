import Passport from "../passport/Passport";
import styles from "./PreviousNext.module.scss";
import frame1 from "../../assets/images/frame1.png";
import frame2 from "../../assets/images/frame2.png";
import { Link } from "react-router-dom";

const PreviousNext = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <Passport image={frame1} name="PREVIOUS" skill="DESIGN AGENCY" />
      <Link to="/work" className={`meta_text ${styles.go_back}`}>
        GO BACK
      </Link>
      <Passport image={frame2} name="NEXT" skill="BRAND STUDIO" />
    </div>
  );
};

export default PreviousNext;
