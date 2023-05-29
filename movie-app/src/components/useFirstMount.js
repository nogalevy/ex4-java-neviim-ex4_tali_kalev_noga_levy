import {useEffect} from 'react';

/**
 * gets callback and call it in first mount (componentDidMount)
 * @param callback
 */
export default function useFirstMount(callback) {
    useEffect(() => {
        callback();
    }, []);
};