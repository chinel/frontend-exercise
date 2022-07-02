import {
  createStopWatchLaps,
  deleteStopWatch,
  resetStopWatch,
  toggleStopWatch,
} from "../services/stopwatch.service";

const useHandleStopWatchEvents = (
  setProgress,
  setError,
  runningStopWatches,
  fetchStopWatchDetails,
  dispatch,
  stopWatchDetials
) => {
  const pauseOrResumeStopWatch = async () => {
    setProgress(true);
    runningStopWatches.includes(stopWatchDetials.__id)
      ? dispatch({
          type: "REMOVE_STOP_WATCH",
          payload: stopWatchDetials.__id,
        })
      : dispatch({
          type: "ADD_STOP_WATCH",
          payload: stopWatchDetials.__id,
        });
    try {
      const timeStamp = new Date().getTime();
      await toggleStopWatch({ time: timeStamp }, stopWatchDetials.__id);
      setProgress(false);
      await fetchStopWatchDetails();
    } catch (error) {
      setError("Unable to toggle stop watch!!. Try refreshing the page");
      setProgress(false);
    }
  };

  const resetWatch = async () => {
    setProgress(true);
    try {
      const timeStamp = new Date().getTime();
      await resetStopWatch({ started: timeStamp }, stopWatchDetials.__id);
      setProgress(false);
      await fetchStopWatchDetails();
    } catch (error) {
      setError("Unable to reset stop watch!!. Try refreshing the page");
      setProgress(false);
    }
  };

  const deleteWatch = async () => {
    setProgress(true);
    try {
      await deleteStopWatch(stopWatchDetials.__id);
      setProgress(false);
      history.push("/");
    } catch (error) {
      setError("Unable to delete stop watch!!. Try refreshing the page");
      setProgress(false);
    }
  };

  const createLaps = async () => {
    setProgress(true);
    try {
      const timeStamp = new Date().getTime();
      await createStopWatchLaps({ time: timeStamp }, stopWatchDetials.__id);
      setProgress(false);
      await fetchStopWatchDetails();
    } catch (error) {
      setError("Unable to create stop watch laps!!. Try refreshing the page");
      setProgress(false);
    }
  };

  return {
    createLaps,
    deleteWatch,
    pauseOrResumeStopWatch,
    resetWatch,
  };
};

export default useHandleStopWatchEvents;
