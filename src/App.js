import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

import CartsPage from "./components/pages/CartsPage";

import ProductDetails from "./components/products/ProductDetails";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import NotFound from "./components/pages/NotFound";

import ProductsState from "./context/products/ProductsState";

const App = () => {
  return (
    <ProductsState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/about" component={About} />
            <Route exact path="/secure/checkout" component={CartsPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </ProductsState>
  );
};

export default App;
