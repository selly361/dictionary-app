import { useEffect, useRef, useState } from 'react';

export const useDebounce = (fn: () => void, delay: number) => {

    const delayRef = useRef<NodeJS.Timeout>()

  

  const debouncedFunction = () => {
    if(delayRef.current) return

    delayRef.current = setTimeout(() => {
        fn()


        delayRef.current = undefined;
    }, delay)

  };

  return debouncedFunction;
};

