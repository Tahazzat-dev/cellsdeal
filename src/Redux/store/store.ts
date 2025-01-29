import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "../features/modal/modalSlice";
import authReducer from '../features/auth/authSlice';
import { baseApi } from '../api/baseApi';
import dropDownSlice from '../features/dropDown/dropDownSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,

    // other reducers here
    auth: authReducer,

    // modal
    modal: modalReducer,
    // drop down
    dropdown:dropDownSlice
    
  },

  // middleware for all api as base api
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
