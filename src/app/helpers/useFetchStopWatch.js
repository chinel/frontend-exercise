import { useEffect, useState } from "react";
import { fetchStopWatch } from "../services/stopwatch.service";

const useFetchStopWatch = (setError, setTimer, id) => {
  const [stopWatchDetials, setStopWatchDetails] = useState(null);

  const fetchStopWatchDetails = async () => {
    try {
      const data = await fetchStopWatch(id);
      const res = await data.json();
      if (data.ok) {
        console.log(res);
        setStopWatchDetails(res.result);
        setTimer(res.result.started);
        setError("");
      }
    } catch (error) {
      setError("Oops an error occured!!. Try refreshing the page");
    }
  };

  useEffect(() => {
    fetchStopWatchDetails();
  }, [id]);

  return { fetchStopWatchDetails, stopWatchDetials };
};

export default useFetchStopWatch;
