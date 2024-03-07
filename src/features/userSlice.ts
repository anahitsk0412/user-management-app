import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../models/User';
import axiosInstance from '../utils/AxiosInstance';
import { RootState } from '../utils/Store';
export interface UserState {
  loading: boolean;
  user: User | null;
  currentId: number | undefined;
  error: string | undefined;
}

const initialState: UserState = {
  loading: false,
  user: null,
  currentId: undefined,
  error: undefined,
};

interface CreateUserPayload {
  username: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

class ThunkArg<T> {}

export const createUser = createAsyncThunk(
  'user/create',
  async (createUserReqData: ThunkArg<CreateUserPayload>) => {
    const response = axiosInstance.post('/users', {
      ...createUserReqData,
    });
    return response;
  }
);

export const getUser = createAsyncThunk('user/info', async (userId: ThunkArg<{ id: number }>) => {
  const response = axiosInstance.get(`/users/${userId}`);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      (state.error = undefined), (state.currentId = action.payload.data.id);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      (state.error = undefined), (state.user = action.payload.data);
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
