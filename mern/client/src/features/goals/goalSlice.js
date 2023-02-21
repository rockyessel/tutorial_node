import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import goalService from './goalService';

// Create goals
const createGoal = createAsyncThunk(
  'auth/create-goals',
  async (goal, thunkAPI) => {
    try {
      return await goalService.create(goal);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const goalSlice = createSlice({
  name: 'goal',
  extraReducers: (builder) => {
    builder
      // Register Builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
    // Login Builder
    //   .addCase(login.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(login.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.user = action.payload;
    //   })
    //   .addCase(login.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    //     state.user = null;
    //   })
    //   // Logout Builder
    //   .addCase(logout.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(logout.fulfilled, (state) => {
    //     state.user = null;
    //     state.isLoading = false;
    //   });
  },
});
