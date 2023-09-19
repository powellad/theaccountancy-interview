import { Job } from "../../models/Job";
import { CandidateResponse } from "./responses/CandidateResponse";
import { JobResponse } from "./responses/JobResponse";

const mapJobResponse = (response: JobResponse): Job => {
  return {
    id: response.id,
    title: response.title,
    location: response.location,
    description: response.description,
  };
};

const mapCandidateResponse = (
  response: CandidateResponse
): CandidateResponse => {
  return {
    id: response.id,
    name: response.name,
    email: response.email,
    phoneNumber: response.phoneNumber,
    applicationDate: response.applicationDate,
  };
};

const mapCandidatesResponse = (
  response: CandidateResponse[]
): CandidateResponse[] => {
  return response.map(mapCandidateResponse);
};

export { mapJobResponse, mapCandidatesResponse };
