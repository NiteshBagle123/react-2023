import { useEffect, useState } from 'react'
const useCounter = (type) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(type === 'increment') {
                setCounter((prevCounter) => prevCounter + 1);
            }
            if(type === 'decrement') {
                setCounter((prevCounter) => prevCounter - 1);
            }
          }, 1000);
      return () => clearInterval(interval);
    }, [type]);

    return counter;
}

export default useCounter;