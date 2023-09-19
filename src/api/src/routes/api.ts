import { Router } from 'express';

import Paths from '../constants/Paths';
import JobRoutes from './JobRoutes';


const apiRouter = Router();
const jobRouter = Router();

jobRouter.get(
  Paths.Jobs.Get,
  JobRoutes.getAllJobs,
);

jobRouter.put(
  Paths.Jobs.Update,
  JobRoutes.updateJob,
);

jobRouter.get(
  Paths.Jobs.GetCandidates,
  JobRoutes.getCandidates,
);

jobRouter.delete(
  Paths.Jobs.DeleteCandidate,
  JobRoutes.deleteCandidate,
);

apiRouter.use(Paths.Jobs.Base, jobRouter);

export default apiRouter;
