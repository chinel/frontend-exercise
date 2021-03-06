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

export const toggleStopWatch = async (data, id) => {
  const response = await fetch(`/api/stopwatches/${id}/toggle`, {
    ...options,
    body: JSON.stringify(data),
  });
  return response;
};

export const resetStopWatch = async (data, id) => {
  const response = await fetch(`/api/stopwatches/${id}`, {
    ...options,
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteStopWatch = async (id) => {
  const response = await fetch(`/api/stopwatches/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const fetchStopWatch = async (id) => {
  const response = await fetch(`/api/stopwatches/${id}`);
  return response;
};

export const createStopWatchLaps = async (data, id) => {
  const response = await fetch(`/api/stopwatches/${id}/lap`, {
    ...options,
    body: JSON.stringify(data),
  });
  return response;
};
