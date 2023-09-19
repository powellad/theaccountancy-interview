/**
 * Express router paths go here.
 */
export default {
  Base: '/api',
  Candidates: {
    Base: '/candidates',
    Get: '/:id',
  },
  Jobs: {
    Base: '/jobs',
    Get: '/',
    Update: '/:id/update',
    GetCandidates: '/:id/candidates',
    DeleteCandidate: '/:id/candidates/delete',
  },
} as const;
