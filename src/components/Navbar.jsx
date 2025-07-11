// import { useState } from "react";
// import styles from "./Navbar.module.css";
// import { FiSearch, FiMenu, FiX } from "react-icons/fi";

// import { IoIosArrowDown } from "react-icons/io";
// import { FiPhoneCall } from "react-icons/fi";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className={styles.columncontainer}>
//       <div className={styles.container}>
//         {/* لوگو */}
//         <div className={styles.logo}>
//           <img src="../images/navbar/Group.svg" alt="لوگو" />
//           <p>شاپت</p>
//         </div>

//         {/* آیکون منو در موبایل */}
//         <div
//           className={styles.menuIcon}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <FiX /> : <FiMenu />}
//         </div>

//         {/* باکس جستجو */}
//         <div className={styles.searchbox}>
//           <input type="text" placeholder="محصول مورد نظر رو جستجو کنید ..." />
//           <div className={styles.search}>
//             <i>
//               <FiSearch />
//             </i>
//           </div>
//         </div>

//         <div className={styles.delivery}>
//           <div>
//             <img src="../images/navbar/Tick Square.svg" alt="" />
//             <div>
//               <p>ضمانت اصالت کالا</p>
//               <span>٪۱۰۰ تضمین اصالت</span>
//             </div>
//           </div>
//           <div>
//             <img
//               src="../images/navbar/iconamoon_delivery-free-thin.svg"
//               alt=""
//             />
//             <div>
//               <p>ارسال رایگان</p>
//               <span>تمامی خرید ها</span>
//             </div>
//           </div>
//         </div>

//         {/* آیتم‌های فقط دسکتاپ/تبلت */}
//         <div className={styles.desktopItems}>
//           <div className={styles.profile}>
//             <div className={styles.buy}>
//               <img src="../images/navbar/Buy.svg" alt="" />
//               <div className={styles.circle1}>۲</div>
//             </div>
//             <div className={styles.like}>
//               <img src="../images/navbar/Combined-Shape.svg" alt="" />
//               <div className={styles.circle2}>۰</div>
//             </div>
//             <div>
//               <img src="../images/navbar/Profile.svg" alt="" />
//             </div>
//           </div>
//         </div>

//         {/* منوی بازشو در موبایل */}
//         {isMenuOpen && (
//           <div className={styles.mobileMenu}>
//             <div className={styles.profile}>
//               <div className={styles.buy}>
//                 <img src="../images/navbar/Buy.svg" alt="" />
//                 <div className={styles.circle1}>۲</div>
//               </div>
//               <div className={styles.like}>
//                 <img src="../images/navbar/Combined-Shape.svg" alt="" />
//                 <div className={styles.circle2}>۰</div>
//               </div>
//               <div>
//                 <img src="../images/navbar/Profile.svg" alt="" />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className={styles.containerlinks}>
//         <div className={styles.links}>
//           <div>
//             <p>خانه</p>
//             <i>
//               <IoIosArrowDown />
//             </i>
//           </div>
//           <div>
//             <p>فروشگاه</p>
//             <i>
//               <IoIosArrowDown />
//             </i>
//           </div>
//           <div>
//             <p>وبلاگ</p>
//           </div>
//           <div>
//             <p>تماس با ما</p>
//           </div>
//           <div>
//             <p>درباره ما</p>
//           </div>
//         </div>
//         <div className={styles.phone}>
//           <i>
//             <FiPhoneCall />
//           </i>
//           <p>
//             شماره تماس: <span>۰۹۱۷۱۲۳۴۵۶۷</span>{" "}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSearch, FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.columncontainer}>
      <div className={styles.container}>
        {/* لوگو */}
        <div className={styles.logo}>
          <img src="../images/navbar/Group.svg" alt="لوگو" />
          <p>شاپت</p>
        </div>

        {/* آیکون منو موبایل */}
        <div
          className={styles.menuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* باکس جستجو */}
        <div className={styles.searchbox}>
          <input type="text" placeholder="محصول مورد نظر رو جستجو کنید ..." />
          <div className={styles.search}>
            <i>
              <FiSearch />
            </i>
          </div>
        </div>

        {/* مشخصات ارسال و اصالت */}
        <div className={styles.delivery}>
          <div>
            <img src="../images/navbar/Tick Square.svg" alt="" />
            <div>
              <p>ضمانت اصالت کالا</p>
              <span>٪۱۰۰ تضمین اصالت</span>
            </div>
          </div>
          <div>
            <img
              src="../images/navbar/iconamoon_delivery-free-thin.svg"
              alt=""
            />
            <div>
              <p>ارسال رایگان</p>
              <span>تمامی خرید ها</span>
            </div>
          </div>
        </div>

        {/* آیتم‌های فقط دسکتاپ */}
        <div className={styles.desktopItems}>
          <div className={styles.profile}>
            <div className={styles.buy}>
              <img src="../images/navbar/Buy.svg" alt="" />
              <div className={styles.circle1}>۲</div>
            </div>
            <div className={styles.like}>
              <img src="../images/navbar/Combined-Shape.svg" alt="" />
              <div className={styles.circle2}>۰</div>
            </div>
            <div>
              <img src="../images/navbar/Profile.svg" alt="" />
            </div>
          </div>
        </div>

        {/* منوی همبرگری موبایل */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.profile}>
              <div className={styles.buy}>
                <img src="../images/navbar/Buy.svg" alt="" />
                <div className={styles.circle1}>۲</div>
              </div>
              <div className={styles.like}>
                <img src="../images/navbar/Combined-Shape.svg" alt="" />
                <div className={styles.circle2}>۰</div>
              </div>
              <div>
                <img src="../images/navbar/Profile.svg" alt="" />
              </div>
            </div>

            {/* لینک‌ها در موبایل */}
            <div className={styles.links}>
              <div>
                <p>خانه</p>
                <i>
                  <IoIosArrowDown />
                </i>
              </div>
              <div>
                <p>فروشگاه</p>
                <i>
                  <IoIosArrowDown />
                </i>
              </div>
              <div>
                <p>وبلاگ</p>
              </div>
              <div>
                <p>تماس با ما</p>
              </div>
              <div>
                <p>درباره ما</p>
              </div>
            </div>

            {/* شماره تماس در موبایل */}
            <div className={styles.phone}>
              <i>
                <FiPhoneCall />
              </i>
              <p>
                شماره تماس: <span>۰۹۱۷۱۲۳۴۵۶۷</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* لینک‌ها و شماره تماس در دسکتاپ */}
      <div className={styles.containerlinks}>
        <div className={styles.links}>
          <div>
            <p>خانه</p>
            <i>
              <IoIosArrowDown />
            </i>
          </div>
          <div>
            <p>فروشگاه</p>
            <i>
              <IoIosArrowDown />
            </i>
          </div>
          <div>
            <p>وبلاگ</p>
          </div>
          <div>
            <p>تماس با ما</p>
          </div>
          <div>
            <p>درباره ما</p>
          </div>
        </div>
        <div className={styles.phone}>
          <i>
            <FiPhoneCall />
          </i>
          <p>
            شماره تماس: <span>۰۹۱۷۱۲۳۴۵۶۷</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
