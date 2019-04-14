const initState = {
    clientList: [],
    clientErr: null
}

const clientReducer = (state = initState, action) => {
    switch (action.type) {
        
        case 'ADD CLIENT' : 
            action.client.id = Math.random();
            console.log('new client added')
            let clientList =  [...state.clientList, action.client];
            clientList.reverse()

            // clientList.sort((a, b) => a.name.localeCompare(b.name));
            return {
                clientList,
            };

        case 'ADD CLIENT ERROR' : 
            console.log('add client failed')
            return {
                ...state,
                clientErr: 'A client with this exact name already exists, please try again.'
            }
        
        case 'DELETE CLIENT' :
            clientList = state.clientList.filter(client => 
                {return client.id !== action.id});
            return {...state, clientList};

        case 'DELETE ALL CLIENTS' :
            console.log('we get here');
            clientList = [];
            return {clientList};

        default : return state;
    }
}

export default clientReducer