import styles from "./PetGrooming.module.css";

import { IoIosArrowBack } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";

function PetGrooming() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <img src="./images/grooming/1.png" alt="" />
        <div className={styles.background}></div>
        <div className={styles.image}>
          <p>لوازم نگهداری سگ</p>
          <div>
            <span>مشاهده همه</span>
            <i>
              <IoIosArrowBack />
            </i>
          </div>
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.product1}>
          <img src="./images/grooming/2.png" alt="" />
          <p>باکس حمل سگ و گربه سایز ۳ پانیتو</p>
          <div className={styles.price}>
            <span>قیمت:</span>
            <span>۴۳۷/۰۰۰</span>
          </div>
          <div className={styles.add}>
            <i>
              <CiSquarePlus />
            </i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
        <div className={styles.product2}>
          <img src="./images/grooming/3.png" alt="" />
          <p>کوله پشتی حبابدار سگ و گربه مدل یونیورس</p>
          <div className={styles.price}>
            <span>قیمت:</span>
            <span>۴۳۷/۰۰۰</span>
          </div>
          <div className={styles.add}>
            <i>
              <CiSquarePlus />
            </i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
        <div className={styles.product3}>
          <img src="./images/grooming/4.png" alt="" />
          <p>قلاده کتفی پد دار سگ سایز بزرگ، پلیس</p>
          <div className={styles.price}>
            <span>قیمت:</span>
            <span>۴۳۷/۰۰۰</span>
          </div>
          <div className={styles.add}>
            <i>
              <CiSquarePlus />
            </i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
        <div className={styles.product4}>
          <img src="./images/grooming/5.png" alt="" />
          <p>باکس حمل سگ و گربه سایز ۳ پانیتو</p>
          <div className={styles.price}>
            <span>قیمت:</span>
            <span>۴۳۷/۰۰۰</span>
          </div>
          <div className={styles.add}>
            <i>
              <CiSquarePlus />
            </i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
        <div className={styles.product5}>
          <img src="./images/grooming/6.png" alt="" />
          <p>سشوار حیوانات خانگی مدل PET GROOMING</p>
          <div className={styles.price}>
            <span>قیمت:</span>
            <span>۴۳۷/۰۰۰</span>
          </div>
          <div className={styles.add}>
            <i>
              <CiSquarePlus />
            </i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
        <div className={styles.product6}>
          <img src="./images/grooming/7.png" alt="" />
          <p>غذای گربه مفید پریمیوم (۴ کیلوگرم)</p>
          <div className={styles.price}>
            <span>قیمت:</span>
            <span>۴۳۷/۰۰۰</span>
          </div>
          <div className={styles.add}>
            <i>
              <CiSquarePlus />
            </i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetGrooming;
