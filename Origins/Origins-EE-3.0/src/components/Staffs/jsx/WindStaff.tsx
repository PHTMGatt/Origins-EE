// src/components/Staffs/jsx/WindStaff.tsx
import styles from "../css/WindStaff.module.css";
import windImage from "../../assets/images/wind_staff.png";

const WindStaff = () => {
  return (
    <section className={styles.staffSection}>
      <h2 className={styles.windStaffHeading}>Wind Staff</h2>
      <img src={windImage} alt="Wind Staff" className={styles.windStaffImage} />
      <ul>
        <li>Collect Gem through Wind Tunnel</li>
        <li>Complete the puzzle</li>
        <li>Align the symbols</li>
        <li>Charge with kills in Agartha</li>
      </ul>
    </section>
  );
};

export default WindStaff;