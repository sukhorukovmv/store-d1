import React from "react";
import styled from "styled-components";
//import { storeProduct, storeProducts } from "../data";

export default function ProductSearchName(props) {
  return (
    <ProductSearchNameWrapper>
      <div class="row ml-auto mr-auto no-gutters">
        <select class="col-4 ">
          <option selected="selected">Выберите категорию товара</option>
          <option>Книги</option>
          <option>Смартфоны и гаджеты</option>
          <option>Телевизоры</option>
          <option>Компьютеры</option>
          <option>Красота и здоровье</option>
          <option>Бытовая техника</option>
        </select>
        <form action="" method="get" class="col-8">
          <input name="s" placeholder="Поиск по названию" type="search" />
          <button type="submit"></button>
        </form>
      </div>
    </ProductSearchNameWrapper>
  );
}

const ProductSearchNameWrapper = styled.div`
  form {
    background: #fff;
  }
  select {
    border: none;
    position: relative;
    background: #fff;
  }
  input,
  button {
    border: none;
    outline: none;
    background: transparent;
  }
  input {
    width: 100%;
    height: 42px;
    padding-left: 15px;
  }
  button {
    height: 42px;
    width: 42px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    background: #009ffd;
  }
  button:before {
    content: "\f002";
    font-family: FontAwesome;
    font-size: 16px;
    color: #f9f0da;
  }
`;
