import styles from "./FoodProducts.module.css";

import { CiSquarePlus } from "react-icons/ci";

function FoodProducts() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <p>جدیدترین محصولات</p>
        <p>مشاهده همه</p>
      </div>
      <div className={styles.products}>
        <div className={styles.product1}>
          <img src="../../images/foods/1.png" alt="" />
          <p>غذای گربه مفید پریمیوم (۴ کیلوگرم)</p>
          <div className={styles.price}>
            <p>قیمت:</p>
            <p>۴۳۷/۰۰۰</p>
          </div>
          <div className={styles.add}>
            <i>
              <CiSquarePlus />
            </i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
        <div className={styles.product2}>
          <img src="../../images/foods/2.png" alt="" />
          <p>غذای گربه Kitzy پریمیوم (۲ کیلوگرم)</p>
          <div className={styles.price}>
            <p>قیمت:</p>
            <p>۴۳۷/۰۰۰</p>
          </div>
          <div className={styles.add}>
            <i>
              <CiSquarePlus />
            </i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
        <div className={styles.product3}>
          <img src="../../images/foods/3.png" alt="" />
          <p>غذای سگ Science diet (۳ کیلوگرم)</p>
          <div className={styles.price}>
            <p>قیمت:</p>
            <p>۴۳۷/۰۰۰</p>
          </div>
          <div className={styles.add}>
            <i>
              <CiSquarePlus />
            </i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
        <div className={styles.product4}>
          <img src="../../images/foods/4.png" alt="" />
          <p>مولتی ویتامین گربه Nulo (۴) کیلوکرم</p>
          <div className={styles.price}>
            <p>قیمت:</p>
            <p>۴۳۷/۰۰۰</p>
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

export default FoodProducts;
