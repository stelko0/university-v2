import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetLecturerByIdResponse,
  GetLecturersResponse,
} from "../types/lecturer.types";

export const universityApi = createApi({
  reducerPath: "universityApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getLecturers: builder.query<GetLecturersResponse, undefined>({
      query: () => "/lecturers",
    }),
    getLecturerById: builder.query<GetLecturerByIdResponse, number>({
      query: (id) => `/lecturers/${id}`,
    }),
  }),
});

export const { useGetLecturerByIdQuery, useGetLecturersQuery } = universityApi;
