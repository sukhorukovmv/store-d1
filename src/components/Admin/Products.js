import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  DateField,
  EditButton,
} from "react-admin";

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="category_id" />
      <TextField source="title" />
      <TextField source="img" />
      <TextField source="price" />
      <TextField source="info" />
      <TextField source="company" />
    </Datagrid>
  </List>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="category_id" />
      <TextField source="title" />
      <TextField source="img" />
      <TextField source="price" />
      <TextField source="info" />
      <TextField source="company" />
    </SimpleForm>
  </Create>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="category_id" />
      <TextField source="title" />
      <TextField source="img" />
      <TextField source="price" />
      <TextField source="info" />
      <TextField source="company" />
    </SimpleForm>
  </Edit>
);
