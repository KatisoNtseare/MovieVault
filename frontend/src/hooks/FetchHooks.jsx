import { useState, useEffect } from 'react';

 
const FetchHooks = (apiCall) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiCall();
        setData(response);
      } catch (error) {
        setError('Failed to load data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiCall]); // The hook will re-run if the apiCall changes

  return { data, error, loading };
};

export default FetchHooks;
