import styles from "./Category.module.css";
import { IoIosArrowBack } from "react-icons/io";

function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.fish}>
        <img src="../../images/category/1.png" alt="" />
        <p>غذا ماهی</p>
        <div>
          <i>
            <IoIosArrowBack />
          </i>
        </div>
      </div>
      <div className={styles.cat}>
        <img src="../../images/category/3.png" alt="" />
        <p>غذا و لوازم گربه</p>
        <div>
          <i>
            <IoIosArrowBack />
          </i>
        </div>
      </div>
      <div className={styles.dog}>
        <img src="../../images/category/2.png" alt="" />
        <p>غذا و لوازم سگ</p>
        <div>
          <i>
            <IoIosArrowBack />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Category;
