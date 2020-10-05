const reducer = (state = {id:0}, action) => {
    switch(action.type){
        case 'SET_ALERT' : return action.alert;
        default : return state;
    }
}

export default reducer;