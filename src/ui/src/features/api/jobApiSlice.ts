import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "../../models/Job";
import { mapCandidatesResponse, mapJobResponse } from "./mappers";
import { JobResponse } from "./responses/JobResponse";
import { Candidate } from "../../models/Candidate";
import { CandidateResponse } from "./responses/CandidateResponse";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:8181",
    timeout: 20000,
  }),

  endpoints: (builder) => ({
    getJob: builder.query<Job, { jobId: number }>({
      query: ({ jobId }) => ({
        url: `/jobs/${jobId}`,
      }),
      transformResponse: (response: JobResponse) => mapJobResponse(response),
    }),
    getCandidatesForJob: builder.query<Candidate[], { jobId: number }>({
      query: ({ jobId }) => ({
        url: `/jobs/${jobId}/candidates`,
      }),
      transformResponse: (response: CandidateResponse[]) =>
        mapCandidatesResponse(response),
    }),
  }),
});

export const { useGetJobQuery, useGetCandidatesForJobQuery } = apiSlice;
