import { useCallback, useEffect, useReducer } from "react";


function reducer(state, action) {
    switch(action.type) {
        case 'LOADING': {
            return {
                loading: true,
                data: null,
                error: null
            }
        }
        case 'SUCCESS': {
            return {
                loading: false,
                data: action.data,
                error: null
            }
        }
        case 'ERROR': {
            return {
                loading: false,
                data: null,
                error: action.error
            }
        }
        default: {
            throw new Error("Unhandled action type");
        }
    }
}

const initState = {
    loading: false,
    data: null,
    error: null
};

function useAsync(callback, deps = [], skip = false) {
    
    const [state, dispatch] = useReducer(reducer, initState);
    
    const fetchData = useCallback(async () => {
        dispatch({ type: 'LOADING'});
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data: data });
        } catch(e) {
            dispatch({ type: 'SUCCESS', error: e });
        }
    }, [callback]);

    useEffect(() => {
        if(skip) {
            return;
        }
        fetchData();
    }, deps);

    return [state, fetchData];
}

export default useAsync;