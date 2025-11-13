import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../axios/axiosConfig";

// ✅ Async thunk for registering a user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/auth/register",
        userData
      );

      if (response.data.success) {
        return response.data; // return backend response
      } else {
        return rejectWithValue(response.data.message || "Registration failed");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Server error");
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 Register User
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user || null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
