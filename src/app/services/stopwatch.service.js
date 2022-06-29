export const fetchStopWatches = async (page) => {
  const response = await fetch(`/api/stopwatches?page=${page}`);
  return response;
};
