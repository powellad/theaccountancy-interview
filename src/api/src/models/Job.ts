import { Candidate } from './Candidate';

export interface Job {
    id: number;
    title: string;
    location: string;
    description: string;
    candidates: Candidate[];
  }
