import {useCallback, useEffect} from 'react';

/**
 * gets callback and call it in first mount (componentDidMount)
 * @param callback
 */
export default function useFirstMount(callback) {
    const cb = useCallback(()=>{
        callback();
    },[callback]);

    useEffect(() => {
        cb();
    }, [cb]);

};