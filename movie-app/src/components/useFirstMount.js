import {useEffect} from 'react';

export default function useFirstMount(callback) {
    // Replaces componentDidMount
    useEffect(() => {
        callback();
    }, []);
};