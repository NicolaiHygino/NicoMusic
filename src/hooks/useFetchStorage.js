import { useState, useEffect } from 'react';

export const useFetchStorage = (token, cb, key, defaultValue) => {
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const fetchData = async () => {
      const storagePayload = sessionStorage.getItem(key);

      if (storagePayload) {
        setData(JSON.parse(storagePayload));
        return;
      } 

      const res = await cb(token);
      setData(res?.data || res);
      sessionStorage.setItem(key, JSON.stringify(res?.data || res));
    }
    fetchData();
  }, [token, cb, key]);

  return data;
};
