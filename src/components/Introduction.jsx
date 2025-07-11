import styles from "./Introduction.module.css";

import { IoIosArrowBack } from "react-icons/io";

function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>بهترین و جدیدترین </p>
        <p style={{ fontWeight: 800 }}>لوازم سگ خانگی</p>
        <span>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است.
        </span>
        <div className={styles.shop}>
          <span>خرید کنید</span>
          <div>
            <i>
              <IoIosArrowBack />
            </i>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src="./images/introduction/6.png" alt="" />
        <p>تخفیف تا</p>
        <img src="./images/introduction/7.png" alt="" />
      </div>

      <img
        src="./images/introduction/1.png"
        alt=""
        style={{
          position: "absolute",
          bottom: "15px",
          right: "420px",
          zIndex: 5,
        }}
      />
      <img
        src="./images/introduction/2.png"
        alt=""
        style={{ position: "absolute", right: "0", top: "60px" }}
      />
      <img
        src="./images/introduction/3.png"
        alt=""
        style={{
          position: "absolute",
          left: "30px",
          top: "120px",
          zIndex: "4",
        }}
      />
      <img
        src="./images/introduction/4.png"
        alt=""
        style={{ position: "absolute", left: "0", top: "140px" }}
      />
      <img
        src="./images/introduction/5.png"
        alt=""
        style={{ position: "absolute", bottom: "0", right: "270px" }}
      />
    </div>
  );
}

export default Introduction;
