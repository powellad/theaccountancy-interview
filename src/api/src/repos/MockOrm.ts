import jsonfile from 'jsonfile';
import { Job } from '../models/Job';

const DB_FILE_NAME = 'database.json';

interface IDb {
  jobs: Job[];
}

function openDb(): Promise<IDb> {
  return jsonfile.readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDb>;
}

function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + DB_FILE_NAME), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
