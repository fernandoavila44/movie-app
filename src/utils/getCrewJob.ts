import { TCastCrew } from "../types/creditsCasts";

export const getCrewJob = (crew: TCastCrew[], job: string) => {
  if (!job) return;
  const nameByJob = crew.find((crew) => crew.job === job)?.name
  if (!nameByJob)
    return crew.find((crew) => crew.job === "Director")?.name
  return nameByJob
} 