const accountReducer = (state = 0, action) =>{
    switch(action.type){
        case "add":
            return state + action.payload;
        case "remove":
            return state - action.payload;
        default:
            return state;
    }
}

export default accountReducer;