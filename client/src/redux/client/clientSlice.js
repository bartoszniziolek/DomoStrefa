import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: null,
  error: null,
  loading: false,
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    addClientStart: (state) => {
      state.loading = true;
    },
    addClientSuccess: (state, action) => {
      state.client = action.payload;
      state.loading = false;
      state.error = null;
    },
    addClientFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateClientStart: (state) => {
      state.loading = true;
    },
    updateClientSuccess: (state, action) => {
      state.client = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateClientFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteClientStart: (state) => {
      state.loading = true;
    },
    deleteClientSuccess: (state) => {
      state.client = null;
      state.loading = false;
      state.error = null;
    },
    deleteClientFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    getClientStart: (state) => {
      state.loading = true;
    },
    getClientSuccess: (state, action) => {
      state.client = action.payload;
      state.loading = false;
      state.error = null;
    },
    getClientFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    getClientsStart: (state) => {
      state.loading = true;
    },
    getClientsSuccess: (state, action) => {
      state.client = action.payload;
      state.loading = false;
      state.error = null;
    },
    getClientsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  addClientStart,
  addClientSuccess,
  addClientFailure,
  updateClientFailure,
  updateClientSuccess,
  updateClientStart,
  deleteClientFailure,
  deleteClientSuccess,
  deleteClientStart,
  getClientFailure,
  getClientSuccess,
  getClientStart,
  getClientsFailure,
  getClientsSuccess,
  getClientsStart,
} = clientSlice.actions;

export default clientSlice.reducer;
