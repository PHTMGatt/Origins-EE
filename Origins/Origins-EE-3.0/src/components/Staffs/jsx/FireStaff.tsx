// src/components/Staffs/jsx/FireStaff.tsx
import styles from "../css/FireStaff.module.css";
import fireImage from "../../assets/images/fire_staff.png";

const FireStaff = () => {
  return (
    <section className={styles.staffSection}>
      <h2 className={styles.fireStaffHeading}>Fire Staff</h2>
      <img src={fireImage} alt="Fire Staff" className={styles.fireStaffImage} />
      <ul>
        <li>Collect Gem through Fire Tunnel</li>
        <li>Fill the candles with souls in Agartha</li>
        <li>Decipher the code</li>
        <li><strong>11-5-9-7-6-3-4</strong></li>
      </ul>
    </section>
  );
};

export default FireStaff;