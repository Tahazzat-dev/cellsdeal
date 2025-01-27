import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include', // Ensures cookies are sent with requests
  prepareHeaders: (headers, { getState }) => {
    // Get the token from the state
    const token = (getState() as any).auth?.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// A wrapper function for handling token refresh
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // If unauthorized, try refreshing the token
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh-token',
        method: 'POST',
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // Update the token in the state
      api.dispatch({
        type: 'auth/setUser',
        payload: refreshResult?.data,
      });

      // Retry the original query with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Handle logout if refresh fails
      api.dispatch({ type: 'auth/logout' });
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
