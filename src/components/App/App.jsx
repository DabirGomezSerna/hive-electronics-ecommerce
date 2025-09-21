import "./App.css";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import products from "../../data/products.json";
import Layout from "../../layout/Layout";
import Home from "../../pages/Home/Home";


function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

/*
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
}*/

export default App;
