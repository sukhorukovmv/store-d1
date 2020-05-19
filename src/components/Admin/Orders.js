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
import RichTextInput from "ra-input-rich-text";

export const OrderList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="user_id" />
      <TextField source="date" />
      <TextField source="order" />
    </Datagrid>
  </List>
);
export const OrderCreate = (props) => (
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

export const OrderEdit = (props) => (
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
