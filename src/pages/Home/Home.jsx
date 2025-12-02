import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/productServices";
import List from "../../components/List/List";
import ErrorMessage from "../../components/common/ErrorMessage/ErrorMessage";
import Loading from "../../components/common/Loading/Loading";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        setError("Products didn't load. Try again later.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading>Loading products</Loading>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : products.length > 0 ? (
        <List title="Our products" products={products} layout="grid" />
      ) : (
        <ErrorMessage>
          No products in store! We're sorry about that.
        </ErrorMessage>
      )}
    </div>
  );
}
