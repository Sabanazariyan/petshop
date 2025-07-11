import Footer from "../../layout/Footer.jsx";
import Header from "../../layout/Header";
import Article from "./Article.jsx";
import Category from "./Category.jsx";
import FoodProducts from "./FoodProducts.jsx";
import Introduction from "./Introduction.jsx";
import PetGrooming from "./PetGrooming.jsx";
import Specialproduct from "./Specialproduct.jsx";

function Content() {
  return (
    <div>
      <Header />
      <Introduction />
      <Category />
      <FoodProducts />
      <Specialproduct />
      <PetGrooming />
      <Article />
      <Footer />
    </div>
  );
}

export default Content;
