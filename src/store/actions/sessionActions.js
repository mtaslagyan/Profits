export const addSession = (session) => {
    return(dispatch, getState) => {
        dispatch({type: 'ADD SESSION', session})
    }
}

export const deleteSession = (id) => {
    return (dispatch, getState) => {
        dispatch ({type: 'DELETE SESSION', id})
    }
}

export const deleteAllSessions = () => {
    return (dispatch, getState) => {
        dispatch ({type: 'DELETE ALL SESSIONS'})
    }
}