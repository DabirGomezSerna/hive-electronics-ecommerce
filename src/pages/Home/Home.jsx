import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/productServices";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "#d1d2d2",
            borderRadius: "18px",
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Cargando productos
        </div>
      ) : products && products.length > 0 ? (
        <div className="products-grid">
          {products.map((product) => {
            return <ProductCard key={product._id} product={product}></ProductCard>;
          })}
        </div>
      ) : (
        <div>No hay productos en el catalogo</div>
      )}
    </div>
  );
}
