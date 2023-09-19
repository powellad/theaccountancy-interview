import JobRepo from '../repos/JobRepo';
import { Job } from '../models/Job';
import { RouteError } from '../other/classes';
import HttpStatusCodes from '../constants/HttpStatusCodes';
import { Candidate } from '../models/Candidate';

function getAll(): Promise<Job[]> {
  return JobRepo.getAll();
}

async function update(job: Job): Promise<void> {
  const persists = await JobRepo.persists(job.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      'Job not found.',
    );
  }
  
  return JobRepo.update(job);
}

function getCandidatesById(jobId: number): Promise<Candidate[]> {
  return JobRepo.getCandidatesById(jobId);
}

function deleteCandidatesByJobId(
  jobId: number,
  candidateId: number): Promise<void> {

  return JobRepo.deleteCandidatesByJobId(jobId, candidateId);
}


export default {
  getAll,
  update,
  getCandidatesById,
  deleteCandidatesByJobId,
} as const;
