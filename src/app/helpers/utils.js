export const formatTimeStamp = (timeStamp) => {
  let diffTime = Math.abs(new Date().getTime() - new Date(timeStamp).getTime());
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

export const timeStampDiff = (timeStamp1, timeStamp2) => {
  let diffTime = Math.abs(timeStamp2 - new Date(timeStamp1).getTime());
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

export const getHighestTimeStamp = (startedTimeStamp, arrayOfTimeStamp) => {
  const diff = arrayOfTimeStamp.map((item) => item - startedTimeStamp);
  const getMilliseconds = diff.map((item) => getTimeInMilliseconds(item));

  const max = Math.max(...getMilliseconds);
  console.log(getMilliseconds.indexOf(max));
  // console.log(new Date().getMilliseconds())
  return getMilliseconds.indexOf(max);
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
