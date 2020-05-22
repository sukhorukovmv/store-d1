
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

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="lastName" />
      <TextField source="firstName" />
      <TextField source="middleName" />
      <TextField source="email" />
      <TextField source="address" />
      <TextField source="phone" />
      <TextField source="age" />
    </Datagrid>
  </List>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="lastName" />
      <TextField source="firstName" />
      <TextField source="middleName" />
      <TextField source="email" />
      <TextField source="address" />
      <TextField source="phone" />
      <TextField source="age" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="lastName" />
      <TextField source="firstName" />
      <TextField source="middleName" />
      <TextField source="email" />
      <TextField source="address" />
      <TextField source="phone" />
      <TextField source="age" />
    </SimpleForm>
  </Edit>
);
