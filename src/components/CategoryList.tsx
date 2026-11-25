import type { Product } from "../data/products";

type Props = {
  products: Product[];
};

export default function CategoryList({ products }: Props) {
  // Lấy danh sách danh mục duy nhất từ mảng products
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <section className="container category-section">
      <h2 className="section-title">Danh mục sản phẩm</h2>
      <div className="category-list">
        <button className="category-chip active">Tất cả</button>
        {categories.map((category) => (
          <button key={category} className="category-chip">
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}