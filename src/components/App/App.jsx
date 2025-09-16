import "./App.css";
import { Card } from "../Card/Card";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App-header">
        <h1>Hive Electronics</h1>
        <p>Your one stop for all your electronic needs!</p>
      </div>

      <main className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
