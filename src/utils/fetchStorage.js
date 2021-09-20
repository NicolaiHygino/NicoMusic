export const fetchStorage = async (key, cb, ...cbArgs) => { 
  const storagePayload = sessionStorage.getItem(key);
  if (storagePayload) return JSON.parse(storagePayload);

  const res = await cb(...cbArgs);
  sessionStorage.setItem(key, JSON.stringify(res));
  return res;
};
