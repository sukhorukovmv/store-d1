import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
//import { ProductConsumer } from "../../context";
import { UserList, UserEdit, UserCreate } from "./Users";
import { ProductList, ProductEdit, ProductCreate } from "./Products";
import { OrderList, OrderEdit, OrderCreate } from "./Orders";

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const dataProvider = jsonServerProvider("http://localhost:3000");

export default class AdminPage extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="products"
          list={ProductList}
          create={ProductCreate}
          edit={ProductEdit}
        />
        <Resource
          name="orders"
          list={OrderList}
          create={OrderCreate}
          edit={OrderEdit}
        />
        <Resource
          name="users"
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
        />
      </Admin>
    );
  }
}
