import { useGetJobQuery } from "../api/jobApiSlice";

export function JobDisplay() {
  const { data: job } = useGetJobQuery({ jobId: 123 });

  return (
    <>
      <div>Job: ${job?.title}</div>
      <div>Job description: ${job?.description}</div>
      <div>Job location: ${job?.location}</div>
    </>
  );
}
