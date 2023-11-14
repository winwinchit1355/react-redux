export const add = (amount) => {
    return (dispatch) =>{
        dispatch({
            type:"add",
            payload:amount,
        });
    }
}
    

export const remove = (amount) => {
    return (dispatch) =>{
        dispatch({
            type:"remove",
            payload:amount,
        });
    }
}

export const insert = (user) =>{
    return (dispatch) =>{
        dispatch({
            type:"insert",
            payload:user,
        });
    }
}

export const destroy = (user) =>{
    return (dispatch) =>{
        dispatch({
            type:"destroy",
            payload:user,
        });
    }
}
    