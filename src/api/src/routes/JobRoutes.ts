import HttpStatusCodes from '../constants/HttpStatusCodes';

import { IReq, IRes } from './types/express/misc';
import JobService from '../services/JobService';
import { Job } from '../models/Job';

async function getAllJobs(_: IReq, res: IRes) {
  const users = await JobService.getAll();
  return res.status(HttpStatusCodes.OK).json({ users });
}

async function updateJob(req: IReq<{job: Job}>, res: IRes) {
  const { job } = req.body;
  await JobService.update(job);
  return res.status(HttpStatusCodes.OK).end();
}

async function getCandidates(req: IReq, res: IRes) {
  const jobId = +req.params.jobId;
  const candidates = await JobService.getCandidatesById(jobId);
  return res.status(HttpStatusCodes.OK).json({ candidates });
}

async function deleteCandidate(req: IReq, res: IRes) {
  const jobId = +req.params.jobId;
  const candidateId = +req.params.candidateId;
  await JobService.deleteCandidatesByJobId(jobId, candidateId);
  return res.status(HttpStatusCodes.OK);
}

export default {
  getAllJobs,
  updateJob,
  getCandidates,
  deleteCandidate,
} as const;
