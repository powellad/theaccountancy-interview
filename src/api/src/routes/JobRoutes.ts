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

async function getCandidates(_: IReq, res: IRes) {
  const candidates = await JobService.getCandidatesById();
  return res.status(HttpStatusCodes.OK).json({ candidates });
}

async function deleteCandidate(_: IReq, res: IRes) {
  await JobService.deleteCandidatesByJobId(id, candidateId);
  return res.status(HttpStatusCodes.OK);
}

export default {
  getAllJobs,
  updateJob,
  getCandidates,
  deleteCandidate,
} as const;
