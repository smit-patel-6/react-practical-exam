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
            return state;
        
        case 'REMOVE_USER':
            return state.users.filter((value) => value.firstname !== action.payload.firstname)

        default:
            return state
    }

}

export default userReducer;

// case 'ADD_USER':
            
        //     users.push(action.payload)
        //     return {
        //         users:users,
        //         loading:false
        //     }

        // case 'REMOVE_USER':
        //     users.push(action.payload)
        //     return {
        //         users:users,
        //         loading:false
        //     }