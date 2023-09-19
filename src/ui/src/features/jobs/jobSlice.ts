import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchJob } from "./mockAPI";
import { Job } from "../../models/Job";

interface JobState {
  job?: Job;
}

const initialState: JobState = {
  job: undefined,
};

export const incrementAsync = createAsyncThunk("job/fetchJob", async () => {
  const response = await fetchJob();
  return response;
});

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
});

export const selectJob = (state: RootState) => state.job.job;

export default jobSlice.reducer;
