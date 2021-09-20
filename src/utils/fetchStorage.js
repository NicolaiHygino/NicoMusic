export const fetchStorage = async (token, cb, key, ...rest) => { 
  const storagePayload = sessionStorage.getItem(key);
  if (storagePayload) return JSON.parse(storagePayload);
  
  const res = await cb(token, rest);
  const promise = res;
  sessionStorage.setItem(key, JSON.stringify(res));

  return promise;
};
