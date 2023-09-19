import { Job } from "../../models/Job";

export function fetchJob() {
  return new Promise<Job>((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: 123,
          title: "Some job",
          location: "Some location",
          description: "Some desc",
        }),
      500
    )
  );
}
