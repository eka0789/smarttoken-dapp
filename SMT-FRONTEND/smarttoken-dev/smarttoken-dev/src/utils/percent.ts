export const calculatePercent = (pool, amount) => {
  if (
    (pool > 0 && pool <= 10 && parseInt(amount) === 10) ||
    (pool > 10 && pool <= 25 && parseInt(amount) === 25) ||
    (pool > 25 && pool <= 50 && parseInt(amount) === 50) ||
    (pool > 50 && pool <= 75 && parseInt(amount) === 75) ||
    (pool > 75 && pool <= 100 && parseInt(amount) === 100)
  ) {
    return '#E0A501';
  } else {
    return '#5A5A5A';
  }
};
