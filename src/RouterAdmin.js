import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList";
import Auth from "./components/Auth/Auth";
import Test from "./components/Redux/Test";
import AdminPage from "./components/Admin/AdminPage";
import { ProductConsumer } from "./context";

export default function RouterAdmin() {
  return (
    <ProductConsumer>
      {(value) => {
        const  {isAdmin}  = value;
        console.log(isAdmin);
        if (isAdmin) {
          return <AdminPage />
        } else {
          return (
            <React.Fragment>
              <Navbar />
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/auth" component={Auth} />
                <Route path="/test" component={Test} />
                <Route component={Default} />
              </Switch>
            </React.Fragment>
          );
        }
      }}
    </ProductConsumer>
  );
}
