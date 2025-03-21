// src/components/Staffs/jsx/IceStaff.tsx
import styles from "../css/IceStaff.module.css";
import iceImage from "../../assets/images/ice_staff.png";

const IceStaff = () => {
  return (
    <section className={styles.staffSection}>
      <h2 className={styles.iceStaffHeading}>Ice Staff</h2>
      <img src={iceImage} alt="Ice Staff" className={styles.iceStaffImage} />
      <ul>
        <li>Collect Gem through Ice Tunnel</li>
        <li>Complete the puzzle</li>
        <li>Shoot three tombstones: Gen 4 soulbox, foot directly in front, Gen 2 tank track</li>
        <li>Line Up Blue Lights</li>
        <li>Get Kills in Agartha</li>
      </ul>
    </section>
  );
};

export default IceStaff;
