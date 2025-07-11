import styles from "./Article.module.css";

import { HiOutlineUser } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";

function Article() {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <div className={styles.image}>
          <span>نگهداری سگ</span>
          <img src="../../images/article/1.png" alt="" />
          <span>مقاله جدید</span>
        </div>
        <div className={styles.text}>
          <div className={styles.author}>
            <i>
              <HiOutlineUser />
            </i>
            <p>منتشر کننده</p>
            <p className={styles.span}>آرمان</p>
          </div>
          <div className={styles.date}>
            <i>
              <SlCalender />
            </i>
            <p>تاریخ</p>
            <p className={styles.span}>۱۴۰۰/۰۲/۲۴</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>نکات کلیدی درباره نگهداری سگ در آپارتمان های ایرانی</p>
          <p>
            نگهداری از سگ تو همه مناطق دنیا داره رواج بیشتر و بیشتری پیدا می‌کنه
            و خب همون‌طور که ...
          </p>
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.image}>
          <span>نگهداری سگ</span>
          <img src="../../images/article/2.png" alt="" />
          <span>مقاله جدید</span>
        </div>
        <div className={styles.text}>
          <div className={styles.author}>
            <i>
              <HiOutlineUser />
            </i>
            <p>منتشر کننده</p>
            <p className={styles.span}>آرمان</p>
          </div>
          <div className={styles.date}>
            <i>
              <SlCalender />
            </i>
            <p>تاریخ</p>
            <p className={styles.span}>۱۴۰۰/۰۲/۲۴</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>13 تا از بهترین نژادهای سگ برای افراد مبتدی را بشناسید!</p>
          <p>
            سگ‌ها می‌تونن بهترین دوست ما، هم‌بازی بچه‌هامون یا نگهبان خونه‌مون
            باشن. ولی برای ...
          </p>
        </div>
      </div>
      <div className={styles.content3}>
        <div className={styles.image}>
          <span>نگهداری سگ</span>
          <img src="../../images/article/3.png" alt="" />
          <span>مقاله جدید</span>
        </div>
        <div className={styles.text}>
          <div className={styles.author}>
            <i>
              <HiOutlineUser />
            </i>
            <p>منتشر کننده</p>
            <p className={styles.span}>آرمان</p>
          </div>
          <div className={styles.date}>
            <i>
              <SlCalender />
            </i>
            <p>تاریخ</p>
            <p className={styles.span}>۱۴۰۰/۰۲/۲۴</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>3 روش ساده برای آموزش فرمان نخور به سگ، که همه باید بدانند.</p>
          <p>
            هر سگی باید یاد بگیره که از روی زمین چیزی نخوره چون این کار می‌تونه
            کلی دردسر ایجاد کنه، از ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
