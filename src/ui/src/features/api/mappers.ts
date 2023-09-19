import { Job } from "../../models/Job";
import { JobResponse } from "./responses/JobResponse";

const mapJobResponse = (response: JobResponse): Job => {
  return {
    id: response.id,
    title: response.title,
    location: response.location,
    description: response.description,
  };
};

export { mapJobResponse };
