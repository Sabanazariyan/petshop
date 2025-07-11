import Navbar from "../src/components/Navbar";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <span>تا ۵۰٪</span>
          <p>تخفیف برای تمامی محصولات</p>
        </div>
      <Navbar />
      </div>
    </>
  );
}

export default Header;
