export const addClient = (client) => {
    return(dispatch, getState) => {
        // dispatch({type: 'ADD CLIENT', client}) }
        const {
            clients: { clientList },
          } = getState();
        console.log('state: ' + JSON.stringify(getState())); 
        // let clientList = getState().clientList; 
        console.log('clientList: ' + clientList); 
        if (clientList && clientList.map( client => { 
            return client.name;
        }).includes(client.name)) 
            { return ( dispatch({type: 'ADD CLIENT ERROR'}) ) }
        else { dispatch({type: 'ADD CLIENT', client}) }   
    }
}

export const deleteClient = (id) => {
    return(dispatch, getState) => {
        dispatch({type: 'DELETE CLIENT', id})
    }
}

export const deleteAllClients = () => {
    return(dispatch, getState) => {
        dispatch({type: 'DELETE ALL CLIENTS'})
    }
}