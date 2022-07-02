import { useEffect, useState } from "react";
import { fetchStopWatches } from "../services/stopwatch.service";

const useFetchStopWatches = (setError) => {
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [stopWatches, setStopWatches] = useState([]);
  const fetchMoreStopWatches = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStopWatches(currentPage);
        const res = await data.json();
        if (data.ok) {
          setCurrentPage(res.meta.currentPage);
          setTotalPages(res.meta.totalPages);
          setStopWatches((prev) => [...prev, ...res.result]);
          setError("");
        }
      } catch (error) {
        setError("Oops an error occured!!. Try refreshing the page");
      }
    };

    fetchData();
  }, [currentPage]);

  return { fetchMoreStopWatches, totalPages, currentPage, stopWatches };
};

export default useFetchStopWatches;
