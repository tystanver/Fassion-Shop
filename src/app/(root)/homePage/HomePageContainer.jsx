import Customer from "./homeSecton/Customer";
import Herosection from "./homeSecton/Herosection";
import Product from "./homeSecton/Product";


const HomePageContainer = () => {
  return (
    <div>
      <Herosection />
      <Product />
      <Customer />
    </div>
  );
};

export default HomePageContainer;
