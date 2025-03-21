// src/components/Staffs/jsx/LightningStaff.tsx
import styles from "../css/LightningStaff.module.css";
import lightningImage from "../../assets/images/lightning_staff.png";

const LightningStaff = () => {
  return (
    <section className={styles.staffSection}>
      <h2 className={styles.lightningStaffHeading}>Lightning Staff</h2>
      <img src={lightningImage} alt="Lightning Staff" className={styles.lightningStaffImage} />
      <ul>
        <li>Collect Gem through Lightning Tunnel</li>
        <li>Complete the puzzle</li>
        <li>Align the purple lights</li>
        <li>Charge with kills in Agartha</li>
      </ul>
    </section>
  );
};

export default LightningStaff;