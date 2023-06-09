import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL ="https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (text, thunkAPI) => {
  try {
      const response = await axios.post("/contacts", {...text});
      return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
  }
});

export const editContact = createAsyncThunk("contacts/editContact", async (contact, thunkAPI) => {
    const { id, name, number } = contact;
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
}
);
