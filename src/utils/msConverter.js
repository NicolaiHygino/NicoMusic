export const msToMinsAndSecs = (ms, type) => {
  const mins = Math.floor(ms / 60000);
  const secs = ((ms % 60000) / 1000).toFixed(0);

  if (type === 'h') {
    return `${mins}m ${secs}s`;
  } 
  return `${mins}:${(secs < 10 ? '0' : '')}${secs}`;
};

export const msToHoursAndMins = ms => {
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((ms / (1000 * 60)) % 60);

  return `${hours}h ${mins}min`
}
