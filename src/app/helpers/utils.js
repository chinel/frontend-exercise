export const formatTimeStamp = (timeStamp, timestamp2) => {
  const currentTimeStamp = timestamp2 ? timestamp2 : new Date().getTime();
  let diffTime = Math.abs(currentTimeStamp - new Date(timeStamp).getTime());
  let days = diffTime / (24 * 60 * 60 * 1000);
  let hours = (days % 1) * 24;
  let minutes = (hours % 1) * 60;
  let secs = (minutes % 1) * 60;
  let milliSec = (secs % 1) * 1000;
  [days, hours, minutes, secs, milliSec] = [
    Math.floor(days),
    Math.floor(hours),
    Math.floor(minutes),
    Math.floor(secs),
    Math.floor(milliSec),
  ];

  return `<span>${
    hours + days * 24
  }</span>:<span>${minutes}</span>:<span>${secs}</span>:<span>${milliSec}</span>`;
};

export const getArrayTimeStampDiffInMilliseconds = (
  startedTimeStamp,
  arrayOfTimeStamp
) => {
  const diff = arrayOfTimeStamp.map((item) => item - startedTimeStamp);
  const getMilliseconds = diff.map((item) => getTimeInMilliseconds(item));
  return getMilliseconds;
};

const getTimeInMilliseconds = (timeStamp) => {
  const date = new Date(timeStamp * 1000);

  let addUpTime = 0;
  addUpTime += date.getHours() * 60 * 60;
  addUpTime += date.getMinutes() * 60;
  addUpTime += date.getSeconds();
  addUpTime *= 1000;
  addUpTime += date.getMilliseconds();

  return addUpTime;
};

export const getHighestTimeStamp = (startedTimeStamp, arrayOfTimeStamp) => {
  const getMilliseconds = getArrayTimeStampDiffInMilliseconds(
    startedTimeStamp,
    arrayOfTimeStamp
  );
  const max = Math.max(...getMilliseconds);

  return getMilliseconds.indexOf(max);
};

export const getLowestTimeStamp = (startedTimeStamp, arrayOfTimeStamp) => {
  const getMilliseconds = getArrayTimeStampDiffInMilliseconds(
    startedTimeStamp,
    arrayOfTimeStamp
  );
  const min = Math.min(...getMilliseconds);

  return getMilliseconds.indexOf(min);
};
