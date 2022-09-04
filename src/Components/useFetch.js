import { useState } from 'react';
import { useEffect } from 'react';
const useFetch = (url) => {
    const [blogs_data, setData] = useState(null);
    const DeleteItem = (index) => {
        const new_blogs_data = blogs_data.filter(blog => blog.id !== index);
        setData(new_blogs_data);
    }
    
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
    
        setTimeout(() => {
          fetch(url, { signal: abortCont.signal })
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setisPending(false);
            setData(data);
            setError(null);
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              // auto catches network / connection error
              setisPending(false);
              setError(err.message);
            }
          })
        }, 1000);
    
        // abort the fetch
        return () => abortCont.abort();
      }, [url])
    
      return { blogs_data, isPending, error,DeleteItem };
    }

export default useFetch;
