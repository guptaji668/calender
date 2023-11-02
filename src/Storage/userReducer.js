const initialState={
    userData:{}
}

export default function UserReducer(state=initialState,actions){
    switch(actions.type){
        case "Add-user":
            state.userData=payload[0]
            return ({userData:state.userData})
    }
}