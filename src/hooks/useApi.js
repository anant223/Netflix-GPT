import { useEffect, useState } from "react";

const useApi = (url, apiOption) => {
  const [state, setState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setState(null);
      try {

        setIsLoading(true);
        const fetchedData = await fetch(url, apiOption);
        const jsonData = await fetchedData.json();
        setState(jsonData);

      } catch (error) {

        setState(error.message);

      } finally {

        setIsLoading(false);

      }
    };
    
    fetchData();

  }, [url, apiOption]);

  return { state, isLoading };
};

export default useApi;
