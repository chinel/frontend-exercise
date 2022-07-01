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
