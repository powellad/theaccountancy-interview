import orm from './MockOrm';
import { Job } from '../models/Job';
import { Candidate } from '../models/Candidate';

/**
 * See if a job with the given ID exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const job of db.jobs) {
    if (job.id === id) {
      return true;
    }
  }
  return false;
}

async function getAll(): Promise<Job[]> {
  const db = await orm.openDb();
  return db.jobs;
}

async function update(job: Job): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.jobs.length; i++) {
    if (db.jobs[i].id === job.id) {
      db.jobs[i] = job;
      return orm.saveDb(db);
    }
  }
}

async function getCandidatesById(id: number): Promise<Candidate[]> {
  const db = await orm.openDb();
  for (let i = 0; i < db.jobs.length; i++) {
    if (db.jobs[i].id === id) {
      return db.jobs[i].candidates;
    }
  }
  return [];
}

async function deleteCandidatesByJobId(
  jobId: number,
  candidateId: number): Promise<void> { 
  // Remove specifiedc candidate
}


// **** Export default **** //

export default {
  persists,
  getAll,
  update,
  getCandidatesById,
  deleteCandidatesByJobId,
} as const;
