const formatTimeStamp = (timeStamp) => {
  const timeStampDifference = new Date().getTime() - timeStamp;
  let milliseconds = parseInt((timeStampDifference % 1000) / 100);
  let seconds = Math.floor((timeStampDifference / 1000) % 60);
  let minutes = Math.floor((timeStampDifference / (1000 * 60)) % 60);
  let hours = Math.floor((timeStampDifference / (1000 * 60 * 60)) % 24);

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};
