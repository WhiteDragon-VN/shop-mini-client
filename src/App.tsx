import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const cheapProducts = filterProducts(products, { maxPrice: 300000, sort: "asc" });
  const electronics = filterProducts(products, { category: "Sinh vật" });
  const lowStockProducts = products.filter((p) => p.stock >= 1 && p.stock <= 5);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList products={products} />
        <ProductList title="Sản phẩm nổi bật" items={products} />
        <ProductList title="Giá dưới 300.000 đ" items={cheapProducts} />
        <ProductList title="Danh sách sinh vật" items={electronics} />
        <ProductList title="Sản phẩm sắp hết hàng" items={lowStockProducts} />
      </main>
      <Footer />
    </>
  );
}

export default App;
