const initialState = {
    users:[{
        firstname:"xyz",
        lastname:'abc',
        gender:'male'
    }
],
}


const userReducer = ( state = initialState,action) => {
    switch(action.type){
        case 'ADD_USER':
            state.users.push(action.payload)
            const newState = {...state}
            return newState;
        
        case 'REMOVE_USER':
            return {
                users:state.users.filter((value) => value.firstname !== action.payload.firstname)
            }
        default:
            return state
    }

}

export default userReducer;
