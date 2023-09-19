import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "../../models/Job";
import { mapJobResponse } from "./mappers";
import { JobResponse } from "./responses/JobResponse";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:8181",
    timeout: 20000,
  }),

  endpoints: (builder) => ({
    getJob: builder.query<Job, { jobId: number }>({
      query: ({ jobId }) => ({
        url: "/jobs/",
        params: {
          jobId,
        },
      }),
      transformResponse: (response: JobResponse) => mapJobResponse(response),
    }),
  }),
});

export const { useGetJobQuery } = apiSlice;
