import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// example of how to use the hooks
// export const useAuth = () => {
//   const { user } = useAppSelector((state) => state.auth);
//   return { user };
// };

// const updateUser = (user: User) => {
//   const dispatch = useAppDispatch();
//   dispatch(setUser(user));
// };

// export const useToken = () => {
//   const token = useAppSelector((state) => state.auth.token);
//   return { token };
// };

// export const useCurrentUser = () => {
//   const user = useAppSelector((state) => state.auth.user);
//   return { user };
// };

