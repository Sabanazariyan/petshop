import styles from "./Specialproduct.module.css";

import { IoIosArrowBack } from "react-icons/io";

function Specialproduct() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.text}>
          <p>دنیای عجیب حیوانات خانگی</p>
          <div className={styles.link}>
            <span>محصولات ویژه</span>
            <div>
              <i>
                <IoIosArrowBack />
              </i>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img
            src="../../images/special/1.png"
            alt=""
            className={styles.image1}
          />
          <img
            src="../../images/special/2.png"
            alt=""
            className={styles.image2}
          />
          <img
            src="../../images/special/3.png"
            alt=""
            className={styles.image3}
          />
          <img
            src="../../images/special/4.png"
            alt=""
            className={styles.image4}
          />
          <img
            src="../../images/special/5.png"
            alt=""
            className={styles.image5}
          />
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.product1}>
          <img src="../../images/special/background1.png" alt="" />
          <p>فروش انواع غذای خشک</p>
          <div>
            <span>خرید کنید</span>
            <div>
              <i>
                <IoIosArrowBack />
              </i>
            </div>
          </div>
          <img
            src="../../images/special/product1.png"
            alt=""
            className={styles.impro}
          />
          <img src="../../images/special/border1.png" alt="" />
        </div>
        <div className={styles.product2}>
          <img src="../../images/special/background2.png" alt="" />
          <p>غذای سگ نژاد جونیور</p>
          <div>
            <span>خرید کنید</span>
            <div>
              <i>
                <IoIosArrowBack />
              </i>
            </div>
          </div>
          <img
            src="../../images/special/product2.png"
            alt=""
            className={styles.impro}
          />
          <img src="../../images/special/border2.png" alt="" />
        </div>
        <div className={styles.product3}>
          <img src="../../images/special/background3.png" alt="" />
          <p>انواع کنسرو برای سگ</p>{" "}
          <div>
            <span>خرید کنید</span>
            <div>
              <i>
                <IoIosArrowBack />
              </i>
            </div>
          </div>
          <img
            src="../../images/special/product3.png"
            alt=""
            className={styles.impro}
          />
          <img src="../../images/special/border3.png" alt="" />
        </div>
        <div className={styles.product4}>
          <img src="../../images/special/background4.png" alt="" />
          <p>قرص و پودر های مولتی ویتامین</p>
          <div>
            <span>خرید کنید</span>
            <div>
              <i>
                <IoIosArrowBack />
              </i>
            </div>
          </div>
          <img
            src="../../images/special/product4.png"
            alt=""
            className={styles.impro}
          />
          <img src="../../images/special/border4.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Specialproduct;
