import styles from "./Footer.module.css";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <div className={styles.border}>
      <div className={styles.container}>
        <div className={styles.columncontainer}>
          <div className={styles.access}>
            <p>دسترسی سریع</p>
            <span>درباره ما</span>
            <span>تماس با ما</span>
            <span>سوالات متداول</span>
            <span>پیگیری سفارشات</span>
          </div>
          <div className={styles.links}>
            <p>لینک های مهم</p>
            <span>حساب کاربری من</span>
            <span>سبد خرید</span>
            <span>قوانین و مقررات</span>
            <span>سیاست حفظ حریم شخصی</span>
          </div>
          <div className={styles.about}>
            <div className={styles.image}>
              <img src="./images/navbar/Group.svg" alt="" />
              <p>فروشگاه شاپت</p>
            </div>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،
            </p>
            <div className={styles.phone}>
              <div>
                <i>
                  <FiPhoneCall />
                </i>
                <p>شماره تماس</p>
              </div>
              <span>۰۹۱۷۱۲۳۴۵۶۷</span>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div></div>
          <p>
            تمامی حقوق این وبسایت برای <span>شاپت</span> محفوظ می باشد.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
