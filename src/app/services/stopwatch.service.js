const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchStopWatches = async (page) => {
  const response = await fetch(`/api/stopwatches?page=${page}`);
  return response;
};

export const createStopWatch = async (data) => {
  const response = await fetch(`/api/stopwatches`, {
    ...options,
    body: JSON.stringify(data),
  });
  return response;
};

export const fetchStopWatch = async (id) => {
  const response = await fetch(`/api/stopwatches/${id}`);
  return response;
};
