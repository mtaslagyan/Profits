const initState = {
    sessionList: []
}

const sessionReducer = (state = initState, action) => {
    switch (action.type) {

        case 'ADD SESSION' :
            action.session.id = Math.random();
            let sessionList = [...state.sessionList, action.session];
            sessionList.reverse()
            return{
                sessionList
            }
            
        case 'DELETE SESSION' :
            sessionList = state.sessionList.filter(session => {
                return session.id !== action.id;
            })
            return {...state, sessionList}

        case 'DELETE ALL SESSIONS' :
            console.log('we get here tooooo');
            sessionList = [];
            return {sessionList};
        
        default : return state;
    }
}

export default sessionReducer