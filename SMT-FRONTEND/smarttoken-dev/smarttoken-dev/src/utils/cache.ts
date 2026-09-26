const writeToCache = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const readFromCache = (key) => JSON.parse(localStorage.getItem(key)) || null;

const clearCahe = (key) => localStorage.removeItem(key);

export { readFromCache, writeToCache, clearCahe };
